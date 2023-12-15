import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './pages/Main/Main';
import { store } from './store/store';
import Quest from './pages/Quest/Quest';
import { AppRoute } from './const';
import Contacts from './pages/Contacts/Contacts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <Main />,
  },
  {
    path: `${AppRoute.Quest}/:questId`,
    element: <Quest />,
  },
  {
    path: AppRoute.Contacts,
    element: <Contacts />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
