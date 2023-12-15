import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { AppRoute } from '../../const';

function Header() {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Link
          to={AppRoute.Main}
          className="logo header__logo"
          aria-label="Перейти на Главную"
        >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
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
            <li className="main-nav__item">
              <a className="link" href="my-quests.html">
                Мои бронирования
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <a className="btn btn--accent header__side-item" href="#">
            Выйти
          </a>
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
