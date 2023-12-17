import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderLogin() {
  return (
    <Link
      to={AppRoute.Login}
      className="btn header__side-item header__login-btn"
    >
      Вход
    </Link>
  );
}

export default HeaderLogin;
