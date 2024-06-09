import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { Layout } from "../pages/layout";
import { DevicesPage } from "../pages/devices";
import { ViewsPage } from "../pages/views";
import { WidgetsPage } from "../pages/widgets";
import { NameDisplayWidget } from "../components/NameDisplayWidget";
import { DateTimeBar } from "../components/DataTimeBar/DataTimeBar";
import { NewsBar } from "../components/NewsBar/NewsBar";
import { WeatherBar } from "../components/WeatherBar/WeatherBar";
import { ScheduleTab } from "../components/ScheduleTab/ScheduleTab";
import { AllComponents } from "../components/AllComponents/AllComponents";

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
  {
    path: "/widgets",
    children: [
      {
        path: "/widgets/name-display",
        element: <NameDisplayWidget />,
      },
      {
        path: "/widgets/date-time-bar",
        element: <DateTimeBar />,
      },
      {
        path: "/widgets/news-bar",
        element: <NewsBar />,
      },
      {
        path: "/widgets/weather-bar",
        element: <WeatherBar />,
      },
      {
        path: "/widgets/schedule-tab",
        element: <ScheduleTab />,
      },
      {
        path: "/widgets/all-components",
        element: <AllComponents />,
      },
    ],
  },
]);
