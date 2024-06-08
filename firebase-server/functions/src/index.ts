// //define google cloud function name
// export const webApi = functions.https.onRequest(main);
// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.

const { onRequest } = require("firebase-functions/v2/https");
// const { onDocumentCreated } = require("firebase-functions/v2/firestore");
// const { logger } = require("firebase-functions");
// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
import { getDatabase } from "firebase-admin/database";

initializeApp();

exports.createDevice = onRequest(async (req: any, res: any) => {
  const name = req.body.name;
  const address = req.body.address;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const type = req.body.type;

  const writeResult = await getFirestore().collection("devices").add({
    name,
    address,
    location: {
      latitude,
      longitude,
    },
    type,
  });

  const db = getDatabase();
  await Promise.all([
    db.ref(`devices/${writeResult.id}/content`).set({}),
    db.ref(`devices/${writeResult.id}/lastHeartbeat`).set(Date.now()),
  ]);

  res.json({
    message: "Sucessfull!",
    id: writeResult.id,
  });
});

exports.devicesNear = onRequest(async (req: any, res: any) => {
  const latitude = parseFloat(req.body.latitude);
  const longitude = parseFloat(req.body.longitude);
  const radius = req.body.radius;
  //aproximations for Krakow
  const kmPerLatitiude = 111;
  const kmPerLongitude = 71.69;
  //const maxDiff = radius / kmPerLongitude;
  const db = getFirestore();
  const querySnapshot = await db
    .collection("devices")
    // .where("location.latitude", ">=", latitude - maxDiff)
    // .where("location.latitude", "<=", latitude + maxDiff)
    // .where("location.longitude", ">=", longitude - maxDiff)
    // .where("location.longitude", "<=", longitude + maxDiff)
    .get();
  const results: String[] = [];

  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    const location = data.location;
    const dif_long = (location.longitude - longitude) * kmPerLongitude;
    const dif_lat = (location.latitude - latitude) * kmPerLatitiude;

    if (dif_long * dif_long + dif_lat * dif_lat < radius * radius) {
      results.push(doc.id);
    }
  });
  res.json({
    message: "Sucessfull!",
    ids: results,
  });
});

exports.updateDevice = onRequest(async (req: any, res: any) => {
  // Extract device ID from request parameters
  const deviceId = req.body.id;

  // Check if deviceId is provided
  if (!deviceId) {
    res.status(400).json({ error: "Device ID is required" });
    return;
  }

  // Get a reference to the Firestore collection
  const deviceRef = getFirestore().collection("devices").doc(deviceId);

  // Fetch the existing device data
  const deviceDoc = await deviceRef.get();

  // Check if the device exists
  if (!deviceDoc.exists) {
    res.status(404).json({ error: "Device not found" });
    return;
  }

  // Get the existing data
  const existingData = deviceDoc.data();

  // Update only the fields that are provided
  const updatedData = {
    ...existingData,
    name: req.body.name || existingData?.name,
    address: req.body.address || existingData?.address,
    location: {
      latitude: req.body.latitude ?? existingData?.location?.latitude,
      longitude: req.body.longitude ?? existingData?.location?.longitude,
    },
    type: req.body.type || existingData?.type,
  };

  // Save the updated data back to Firestore
  await deviceRef.update(updatedData);

  // Send a success response
  res.json({
    message: "Device updated successfully!",
    id: deviceId,
  });
});

exports.setContent = onRequest(async (req: any, res: any) => {
  const ids = JSON.parse(req.body.ids);
  console.log(ids);
  const content = JSON.parse(req.body.content);
  console.log(content);
  // Reference to the Realtime Database
  const db = getDatabase();

  // Update the content for each device ID
  const updates = ids.map(async (deviceId: string) => {
    const deviceRef = db.ref(`devices/${deviceId}/content`);
    await deviceRef.set(content);
  });

  // Wait for all updates to complete
  await Promise.all(updates);

  res.json({
    message: "Sucessfull!",
  });
});

exports.heartbeat = onRequest(async (req: any, res: any) => {
  const id = req.body.id;

  // Reference to the Realtime Database
  const db = getDatabase();

  // Update the content for each device ID
  await db.ref(`devices/${id}/lastHeartbeat`).set(Date.now());

  res.json({
    message: "Sucessfull!",
  });
});

exports.checkOnline = onRequest(async (req: any, res: any) => {
  const id = req.body.id;

  // Reference to the Realtime Database
  const db = getDatabase();

  // Update the content for each device ID
  await db.ref(`devices/${id}/lastHeartbeat`).set(Date.now());

  res.json({
    message: "Sucessfull!",
  });
});
