import MainContent from '../../components/MainContent/MainContent';

function Main() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <span className="logo header__logo">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </span>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="link active" href="index.html">
                  Квесты
                </a>
              </li>
              <li className="main-nav__item">
                <a className="link" href="contacts.html">
                  Контакты
                </a>
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
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <MainContent />
        </div>
      </main>
    </div>
  );
}

export default Main;
