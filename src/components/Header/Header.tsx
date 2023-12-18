import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { AppRoute } from '../../const';
import IsAuth from '../IsAuth/IsAuth';
import HeaderLogout from '../HeaderLogout/HeaderLogout';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Logo from '../Logo/Logo';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container container--size-l">
        {pathname === AppRoute.Main ? (
          <span className="logo">
            <Logo />
          </span>
        ) : (
          <NavLink
            to={AppRoute.Main}
            className="logo header__logo"
            aria-label="Перейти на Главную"
          >
            <Logo />
          </NavLink>
        )}
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink
                to={AppRoute.Main}
                className={({ isActive }) =>
                  cn('link', {
                    active: isActive,
                  })
                }
              >
                Квесты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                to={AppRoute.Contacts}
                className={({ isActive }) =>
                  cn('link', {
                    active: isActive,
                  })
                }
              >
                Контакты
              </NavLink>
            </li>
            <IsAuth
              authComponent={
                <li className="main-nav__item">
                  <NavLink
                    to={AppRoute.Reservation}
                    className={({ isActive }) =>
                      cn('link', {
                        active: isActive,
                      })
                    }
                  >
                    Мои бронирования
                  </NavLink>
                </li>
              }
              noAuthComponent={null}
            />
          </ul>
        </nav>
        <div className="header__side-nav">
          <IsAuth
            authComponent={<HeaderLogout />}
            noAuthComponent={<HeaderLogin />}
          />
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
