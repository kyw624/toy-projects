import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@components/UI/RootLayout';
import ErrorPage from '@pages/ErrorPage';
import PostListPage from '@pages/PostListPage';
import PostDetailPage from '@pages/PostDetailPage';
import CreatePostPage from '@pages/CreatePostPage';
import EditPostPage from '@pages/EditPostPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/board',
        element: <PostListPage />,
      },
      {
        path: '/board/:postId',
        element: <PostDetailPage />,
      },
      {
        path: '/board/new',
        element: <CreatePostPage />,
      },
      {
        path: '/board/:postId/edit',
        element: <EditPostPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
