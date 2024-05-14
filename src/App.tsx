import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, HomePage } from './pages';
import { SearchPage } from './pages/search';
import { DetailsPage } from './pages/details';
import { searchLoader } from './pages/search/searchLoader';
import { detailsLoader } from './pages/details/detailsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
