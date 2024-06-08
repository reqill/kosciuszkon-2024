import { HStack, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { TabLink } from '../components/TabLink';

export const DashboardPage = () => {
  return (
    <VStack width="100%" padding={5}>
      <HStack alignItems="flex-start" width="100%" gap={0}>
        <TabLink to="/dashboard/devices" text="Urządzenia" />
        <TabLink to="/dashboard/widgets" text="Widżety" />
        <TabLink to="/dashboard/views" text="Widoki" />
      </HStack>
      <Outlet />
    </VStack>
  );
};
