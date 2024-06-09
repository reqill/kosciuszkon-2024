import { useFormik } from "formik";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogPanel,
  Input,
  Label,
  Field,
  Fieldset,
  Select,
} from "@headlessui/react";

export type DeviceType = {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  address: string;
  type: string;
};

type Props = {
  defaultValues?: DeviceType;
  onSubmitSuccess: () => void;
  onClose: () => void;
  isOpen: boolean;
};

const postDevice = async (device: Omit<DeviceType, "id">) => {
  console.log("POST", device);
};

const putDevice = async (device: DeviceType) => {
  console.log("PUT", device);
};

export const DeviceForm = ({
  defaultValues,
  onSubmitSuccess,
  onClose,
  isOpen,
}: Props) => {
  const initialValues: DeviceType = defaultValues || {
    id: 0,
    name: "",
    longitude: 0,
    latitude: 0,
    address: "",
    type: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        if (defaultValues) {
          await putDevice({ ...values, id: defaultValues.id });
        } else {
          await postDevice(values);
        }
        onSubmitSuccess();
        resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/20">
        <DialogPanel className="max-w-lg space-y-4 border bg-white px-4 py-5">
          <DialogTitle className="text-lg font-semibold text-gray-800">
            Add new device
          </DialogTitle>

          <Fieldset className="space-y-2 w-96">
            <Field className="w-full flex flex-col">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="w-full bg-gray-100 border-gray-300 rounded-sm py-1 px-2"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Field>

            <Field className="w-full flex flex-col">
              <Label htmlFor="longitude">Longitude</Label>
              <Input
                id="longitude"
                className="w-full bg-gray-100 border-gray-300 rounded-sm py-1 px-2"
                name="longitude"
                value={formik.values.longitude}
                onChange={formik.handleChange}
              />
            </Field>

            <Field className="w-full flex flex-col">
              <Label htmlFor="latitude">Latitude</Label>
              <Input
                id="latitude"
                className="w-full bg-gray-100 border-gray-300 rounded-sm py-1 px-2"
                name="latitude"
                value={formik.values.latitude}
                onChange={formik.handleChange}
              />
            </Field>

            <Field className="w-full flex flex-col">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                className="w-full bg-gray-100 border-gray-300 rounded-sm py-1 px-2"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </Field>

            <Field className="w-full flex flex-col">
              <Label htmlFor="type">Type</Label>
              <Select
                id="type"
                className="w-full bg-gray-100 border-gray-300 rounded-sm py-1 px-2"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
              >
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="info">Information</option>
              </Select>
            </Field>
          </Fieldset>

          <div className="flex flex-row justify-end">
            <Button
              className="ring-inset ring-1 ring-blue-500 text-blue-500 px-2 py-1 rounded ml-auto mr-2"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => formik.submitForm()}
            >
              Save
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
