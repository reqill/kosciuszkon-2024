import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboard';
import { HomePage } from '../pages/home';
import { Layout } from '../pages/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);
