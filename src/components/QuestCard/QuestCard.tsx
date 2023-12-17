import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute, QuestLevelLocalized } from '../../const';
import { TQuestPreview } from '../../types/quest';
import { TReservation } from '../../types/reservation';

type TQuestCardProps = {
  questData: TQuestPreview;
  reservationData?:
    | {
        id: TReservation['id'];
        description: string;
        peopleCount: number;
        onBtnClick: (id: TReservation['id']) => void;
      }
    | undefined;
};

function QuestCard({
  questData,
  reservationData = undefined,
}: TQuestCardProps) {
  const {
    id,
    title,
    previewImg,
    previewImgWebp,
    peopleMinMax: [min, max],
    level,
  } = questData;

  const peopleCount = reservationData
    ? `${reservationData.peopleCount}`
    : `${min}-${max}`;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            // srcSet="img/content/crypt/crypt-size-s.webp, img/content/crypt/crypt-size-s@2x.webp 2x"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            // srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x"
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={`${AppRoute.Quest}/${id}`} className="quest-card__link">
            {title}
          </Link>
          {reservationData && (
            <span className="quest-card__info">
              {reservationData.description}
            </span>
          )}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleCount} чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {QuestLevelLocalized[level]}
          </li>
        </ul>
        {reservationData && (
          <button
            onClick={() => reservationData.onBtnClick(reservationData.id)}
            className="btn btn--accent btn--secondary quest-card__btn"
            type="button"
          >
            Отменить
          </button>
        )}
      </div>
    </div>
  );
}

const QuestCardMemo = memo(QuestCard);
export default QuestCardMemo;
