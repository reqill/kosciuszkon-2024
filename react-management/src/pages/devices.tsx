import { DeviceForm, DeviceType } from "../components/DeviceForm/DeviceForm";
import { Table } from "../components/Table";
import { useState, useEffect } from "react";
import { axios } from "./../axios";

import firebaseConfig from "./../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get } from "firebase/database";

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "longitude",
    label: "Longitude",
  },
  {
    key: "latitude",
    label: "Latitude",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "type",
    label: "Type",
  },
  {
    key: "status",
    label: "Status",
  },
];

const dummyData = [
  {
    id: "1",
    name: "Device 1",
    longitude: 12.345,
    latitude: 54.321,
    address: "Some address",
    type: "Type 1",
    status: "offline",
  },
  {
    id: "2",
    name: "Device 2",
    longitude: 12.345,
    latitude: 54.321,
    address: "Some address",
    type: "Type 2",
    status: "offline",
  },
];

export const DevicesPage = () => {
  const [editing, setEditing] = useState<DeviceType | undefined>(undefined);
  const [openForm, setOpenForm] = useState(false);
  const [status, setStatus] = useState<{ [key: string]: boolean }>({});
  const [data, setData] = useState<DeviceType[]>(dummyData);
  const [editIds, setEditIds] = useState<string[]>([]);

  type Content = {
    url: string;
    time: number;
  };

  const [textInput, setTextInput] = useState<string>("");
  const [numberInput, setNumberInput] = useState<number | "">("");
  const [records, setRecords] = useState<Content[]>([]);

  // Handler for text input change
  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  // Handler for number input change
  const handleNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(event.target.value === "" ? "" : Number(event.target.value));
  };

  // Function to add a record to the array
  const addContent = () => {
    if (textInput && numberInput !== "") {
      const newRecord: Content = { url: textInput, time: numberInput as number };
      setRecords((prevRecords) => [...prevRecords, newRecord]);
      setTextInput("");
      setNumberInput("");
    } else {
      alert("Please fill in both fields");
    }
  };

  const updateContent = () => {
    console.log(records);
    console.log(editIds);
    return axios
      .post("/setContent", {
        ids: JSON.stringify(editIds),
        content: JSON.stringify(records),
      })
      .then((response) => {
        setRecords([]);
      });
  };

  const getZippedData = () => {
    data.forEach((e) => {
      e.status = status[e.id] ? "online" : "offline";
    });
    console.log(data);
    return data;
  };

  useEffect(() => {
    axios.get("/allDevices").then((response) => {
      setData(response.data);
    });
    const messagesRef = ref(database, `online/`);

    // Listen for changes in the database at the specified location
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const statusData = Object.fromEntries(Object.entries(data).map(([key, value]: [string, any]) => [key, value.online]));
      setStatus(statusData);
    });
  }, []);

  const editHandler = (row: DeviceType) => {
    setEditing(row);
    setOpenForm(true);
  };
  const checkboxHandler = (row: DeviceType, val: any) => {
    setEditIds((prevItems) => {
      if (val.target.checked) {
        return prevItems.includes(row.id) ? prevItems : [...prevItems, row.id];
      } else {
        return prevItems.filter((i) => i !== row.id);
      }
    });
  };

  const deleteHandler = (row: DeviceType) => {
    console.log("Delete", row);
  };

  const addHandler = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const closeHandler = () => {
    setEditing(undefined);
    setOpenForm(false);
  };

  const successHandler = () => {
    setEditing(undefined);
    setOpenForm(false);
    axios.get("/allDevices").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <Table
        data={getZippedData()}
        columns={columns}
        title="Registered devices"
        actions={[{ label: "Add", onClick: addHandler }]}
        editRow={editHandler}
        checkboxHandle={checkboxHandler}
      />
      {openForm && <DeviceForm defaultValues={editing} isOpen={openForm} onSubmitSuccess={successHandler} onClose={closeHandler} />}
      <h1>Simple Form</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>
            url:
            <input type="text" value={textInput} onChange={handleTextInputChange} />
          </label>
        </div>
        <div>
          <label>
            time:
            <input type="number" value={numberInput} onChange={handleNumberInputChange} />
          </label>
        </div>
        <div>
          <button type="button" onClick={addContent}>
            Add Content
          </button>
        </div>
      </form>
      <div>
        <button onClick={updateContent}>Update Content</button>
      </div>
      <div>
        <h2>Curr Content</h2>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              {record.url} - {record.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
