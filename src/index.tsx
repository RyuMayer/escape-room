import ReactDOM from 'react-dom/client';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

export const router = createBrowserRouter([
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
    element: (
      <b
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%)',
          fontSize: '30px',
          textAlign: 'center',
        }}
      >
        Когда нибудь тут будет красивая 404, впрочем, это уже совсем другая
        история
        <br />
        <br />
        <Link to={AppRoute.Main} style={{ color: '#f2890f' }}>
          На главную
        </Link>
      </b>
    ),
  },
]);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>,
);
