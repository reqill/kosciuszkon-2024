import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { Layout } from "../pages/layout";
import { DevicesPage } from "../pages/devices";
import { ViewsPage } from "../pages/views";
import { WidgetsPage } from "../pages/widgets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "/dashboard/devices",
            element: <DevicesPage />,
          },
          {
            path: "/dashboard/widgets",
            element: <WidgetsPage />,
          },
          {
            path: "/dashboard/views",
            element: <ViewsPage />,
          },
        ],
      },
    ],
  },
]);
