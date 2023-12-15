import { memo } from 'react';
import { Link } from 'react-router-dom';

import { QuestLevelLocalized } from '../../const';
import { TQuestPreview } from '../../types/quest';

type TQuestCardProps = {
  questData: TQuestPreview;
};

function QuestCard({ questData }: TQuestCardProps) {
  const {
    id,
    title,
    previewImg,
    previewImgWebp,
    peopleMinMax: [min, max],
    level,
  } = questData;

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
          <Link to={id} className="quest-card__link">
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {min}-{max}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {QuestLevelLocalized[level]}
          </li>
        </ul>
      </div>
    </div>
  );
}

const QuestCardMemo = memo(QuestCard);
export default QuestCardMemo;
