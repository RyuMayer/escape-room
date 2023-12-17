import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './pages/Main/Main';
import { store } from './store/store';
import Quest from './pages/Quest/Quest';
import { AppRoute } from './const';
import Contacts from './pages/Contacts/Contacts';
import Booking from './pages/Booking/Booking';
import { fetchCheckAuth } from './store/user/user.action';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import IsAuth from './components/IsAuth/IsAuth';
import PrevNavigate from './components/PrevNavigate/PrevNavigate';
import Reservation from './pages/Reservation/Reservation';

store.dispatch(fetchCheckAuth());

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
    path: `${AppRoute.Quest}/:questId${AppRoute.Booking}`,
    element: (
      <PrivateRoute>
        <Booking />
      </PrivateRoute>
    ),
  },
  {
    path: AppRoute.Reservation,
    element: (
      <PrivateRoute>
        <Reservation />
      </PrivateRoute>
    ),
  },
  {
    path: `${AppRoute.Contacts}`,
    element: <Contacts />,
  },
  {
    path: `${AppRoute.Login}`,
    element: (
      <IsAuth authComponent={<PrevNavigate />} noAuthComponent={<Login />} />
    ),
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
