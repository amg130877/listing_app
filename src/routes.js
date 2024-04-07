import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Reports from './pages/Reports';
import Listings from './pages/MapListing/Listings';
import Metchants from './pages/Merchants';
import Agents from './pages/Agents';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/app',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" />, index: true },
        /* { path: 'app', element: <DashboardAppPage /> }, */
        { path: 'dashboard', element: <Listings /> },
        { path: 'user', element: <UserPage /> },
        { path: 'merchants', element: <Metchants /> },
        { path: 'agents', element: <Agents /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'reports/:month/:year', element: <Reports /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
