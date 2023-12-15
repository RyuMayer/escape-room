import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';

function Main() {
  return (
    <div className="wrapper">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Main;
