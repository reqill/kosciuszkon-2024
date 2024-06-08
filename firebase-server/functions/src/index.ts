// //define google cloud function name
// export const webApi = functions.https.onRequest(main);
// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

exports.createDevice = onRequest(async (req: any, res: any) => {
  const name = req.query.name;
  const address = req.query.address;
  const locationNS = req.query.locationNS;
  const locationWE = req.query.locationWE;
  const type = req.query.type;
  let locationN;
  let locationE;
  if (locationNS[0] === "N") {
    locationN = parseFloat(locationNS.substring(1));
  } else {
    locationN = -parseFloat(locationNS.substring(1));
  }
  if (locationWE[0] === "E") {
    locationE = parseFloat(locationWE.substring(1));
  } else {
    locationE = -parseFloat(locationWE.substring(1));
  }
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore().collection("devices").add({
    name: name,
    address: address,
    locationN: locationN,
    locationE: locationE,
    type: type,
  });
  res.json({
    message: "Sucessfull!",
    id: writeResult.id,
  });
});

// // Listens for new messages added to /messages/:documentId/original
// // and saves an uppercased version of the message
// // to /messages/:documentId/uppercase
// exports.makeuppercase = onDocumentCreated("/messages/{documentId}", (event: any) => {
//   // Grab the current value of what was written to Firestore.
//   const original = event.data.data().original;

//   // Access the parameter `{documentId}` with `event.params`
//   logger.log("Uppercasing", event.params.documentId, original);

//   const uppercase = original.toUpperCase();

//   // You must return a Promise when performing
//   // asynchronous tasks inside a function
//   // such as writing to Firestore.
//   // Setting an 'uppercase' field in Firestore document returns a Promise.
//   return event.data.ref.set({ uppercase }, { merge: true });
// });
