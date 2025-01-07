import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FavoriteProvider } from './context/FavoriteContext';
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import FavoritePage from './pages/favorite';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail/:slug",
      element: <DetailPage />,
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
    },
  ]);

  return (
    <FavoriteProvider>
      <div className="bg-[url('/images/harry.jpg')] min-h-screen bg-cover bg-center bg-no-repeat">
        <RouterProvider router={router} />
      </div>
    </FavoriteProvider>
  );
}

export default App;
