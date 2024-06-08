import { VStack } from '@chakra-ui/react';
import { Table } from '../components/Table';
import { useState } from 'react';
import { DeviceForm, DeviceType } from '../components/DeviceForm';

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'longitude',
    label: 'Longitude',
  },
  {
    key: 'latitude',
    label: 'Latitude',
  },
  {
    key: 'address',
    label: 'Address',
  },
  {
    key: 'type',
    label: 'Type',
  },
];

const dummyData = [
  {
    id: 1,
    name: 'Device 1',
    longitude: 12.345,
    latitude: 54.321,
    address: 'Some address',
    type: 'Type 1',
  },
  {
    id: 2,
    name: 'Device 2',
    longitude: 12.345,
    latitude: 54.321,
    address: 'Some address',
    type: 'Type 2',
  },
];

export const DevicesPage = () => {
  const [editing, setEditing] = useState<DeviceType | undefined>(undefined);
  const [openForm, setOpenForm] = useState(false);

  const editHandler = (row: DeviceType) => {
    setEditing(row);
    setOpenForm(true);
  };

  const deleteHandler = (row: DeviceType) => {
    console.log('Delete', row);
  };

  const addHandler = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const closeHandler = () => {
    setEditing(undefined);
    setOpenForm(false);
  };

  return (
    <VStack width="100%">
      <Table
        data={dummyData}
        columns={columns}
        title="Registered devices"
        actions={[{ label: 'Add', onClick: addHandler }]}
        editRow={editHandler}
      />
      {openForm && <DeviceForm defaultValues={editing} onSubmitSuccess={closeHandler} />}
    </VStack>
  );
};
