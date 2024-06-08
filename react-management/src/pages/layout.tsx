import { Text, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <VStack>
      <Text>Layout</Text>
      <Outlet />
    </VStack>
  );
};
