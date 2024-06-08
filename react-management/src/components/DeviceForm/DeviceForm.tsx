// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   VStack,
// } from '@chakra-ui/react';
// import { useFormik } from 'formik';

// export type DeviceType = {
//   id: number;
//   name: string;
//   longitude: number;
//   latitude: number;
//   address: string;
//   type: string;
// };

// type Props = {
//   defaultValues?: DeviceType;
//   onSubmitSuccess: () => void;
// };

// const postDevice = async (device: Omit<DeviceType, 'id'>) => {};

// const putDevice = async (device: DeviceType) => {};

// export const DeviceForm = ({ defaultValues, onSubmitSuccess }: Props) => {
//   const initialValues: DeviceType = defaultValues || {
//     id: 0,
//     name: '',
//     longitude: 0,
//     latitude: 0,
//     address: '',
//     type: '',
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: async (values, { setSubmitting, resetForm }) => {
//       try {
//         if (defaultValues) {
//           await putDevice({ ...values, id: defaultValues.id });
//         } else {
//           await postDevice(values);
//         }
//         onSubmitSuccess();
//         resetForm();
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <Modal isOpen={true} onClose={onSubmitSuccess}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>{defaultValues ? 'Edit Device' : 'Create Device'}</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Box p={4}>
//             <form onSubmit={formik.handleSubmit}>
//               <VStack spacing={4} align="stretch">
//                 <FormControl isInvalid={!!(formik.errors.name && formik.touched.name)}>
//                   <FormLabel>Name</FormLabel>
//                   <Input {...formik.getFieldProps('name')} />
//                   <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={!!(formik.errors.longitude && formik.touched.longitude)}>
//                   <FormLabel>Longitude</FormLabel>
//                   <Input {...formik.getFieldProps('longitude')} />
//                   <FormErrorMessage>{formik.errors.longitude}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={!!(formik.errors.latitude && formik.touched.latitude)}>
//                   <FormLabel>Latitude</FormLabel>
//                   <Input {...formik.getFieldProps('latitude')} />
//                   <FormErrorMessage>{formik.errors.latitude}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={!!(formik.errors.address && formik.touched.address)}>
//                   <FormLabel>Address</FormLabel>
//                   <Input {...formik.getFieldProps('address')} />
//                   <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={!!(formik.errors.type && formik.touched.type)}>
//                   <FormLabel>Type</FormLabel>
//                   <Input {...formik.getFieldProps('type')} />
//                   <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
//                 </FormControl>
//               </VStack>
//             </form>
//           </Box>
//         </ModalBody>
//         <ModalFooter>
//           <Button variant="ghost" mr={3} onClick={onSubmitSuccess}>
//             Cancel
//           </Button>
//           <Button type="submit" colorScheme="blue" onClick={() => formik.handleSubmit()}>
//             Save
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };
