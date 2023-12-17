import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthStatus } from '../../store/user/user.selector';

type TPrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({ children }: TPrivateRouteProps) {
  const location = useLocation();

  const authStatus = useAppSelector(selectAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return authStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} state={{ prevUrl: location.pathname }} />
  );
}

export default PrivateRoute;
