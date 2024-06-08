import { HStack, Text, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <VStack>
      <HStack width="100%" py={3} px={5} bgColor="blue.500">
        <Text fontSize={22} fontWeight="bold" color="white">
          Centralny System Informacji Publicznej
        </Text>
      </HStack>
      <Outlet />
    </VStack>
  );
};
