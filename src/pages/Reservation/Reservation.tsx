import { useEffect } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  fetchRemoveReservation,
  fetchReservations,
} from '../../store/reservation/reservation.action';
import { dropReservationData } from '../../store/reservation/reservation';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectReservationPlaces } from '../../store/reservation/reservation.selector';
import QuestCard from '../../components/QuestCard/QuestCard';
import { QuestSlotLocalized } from '../../const';
import { TReservation } from '../../types/reservation';

function Reservation() {
  const dispatch = useAppDispatch();

  const reservationPlaces = useAppSelector(selectReservationPlaces);

  useEffect(() => {
    dispatch(fetchReservations());

    return () => {
      dispatch(dropReservationData());
    };
  }, [dispatch]);

  //TODO: useCallback and memo
  const handleBtnClick = (id: TReservation['id']) => {
    dispatch(fetchRemoveReservation(id))
      .unwrap()
      .then(() => {
        dispatch(dropReservationData());
        dispatch(fetchReservations());
      });
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {reservationPlaces.map((place) => {
              const date = QuestSlotLocalized[place.date];
              const description = `[${date}, ${place.time}. ${place.location.address}]`;

              return (
                <QuestCard
                  key={place.id}
                  questData={place.quest}
                  reservationData={{
                    id: place.id,
                    description,
                    peopleCount: place.peopleCount,
                    onBtnClick: handleBtnClick,
                  }}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Reservation;
