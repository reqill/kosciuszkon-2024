import { Outlet } from 'react-router-dom';
import { TabLink } from '../components/TabLink';

export const DashboardPage = () => {
  return (
    <div className="flex flex-col space-y-4"> 
      <div className="flex flex-row space-x-2">
        <TabLink to="/dashboard/devices" text="Urządzenia" />
        <TabLink to="/dashboard/widgets" text="Widżety" />
        <TabLink to="/dashboard/views" text="Widoki" />
      </div>
      <Outlet />
    </div>
  );
};
