import { MouseEvent } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchLogoutAuth } from '../../store/user/user.action';

function HeaderLogout() {
  const dispatch = useAppDispatch();

  const handleLogoutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(fetchLogoutAuth());
  };

  return (
    <a
      onClick={handleLogoutClick}
      className="btn btn--accent header__side-item"
      href="#"
    >
      Выйти
    </a>
  );
}

export default HeaderLogout;
