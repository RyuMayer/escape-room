import { Link } from 'react-router-dom';
import { AppRoute, QuestLevelLocalized, QuestTypeLocalized } from '../../const';
import { TQuest } from '../../types/quest';

type TQuestDescriptionProps = {
  quest: TQuest;
};

function QuestContent({ quest }: TQuestDescriptionProps) {
  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={quest.coverImgWebp} />
          <img src={quest.coverImg} width={1366} height={768} />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            {quest.title}
          </h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>
            {QuestTypeLocalized[quest.type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width={11} height={14} aria-hidden="true">
                <use xlinkHref="#icon-person" />
              </svg>
              {quest.peopleMinMax[0]}–{quest.peopleMinMax[1]}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width={14} height={14} aria-hidden="true">
                <use xlinkHref="#icon-level" />
              </svg>
              {QuestLevelLocalized[quest.level]}
            </li>
          </ul>
          <p className="quest-page__description">{quest.description}</p>
          <Link
            to={`${AppRoute.Quest}/${quest.id}${AppRoute.Booking}`}
            state={{ title: quest.title }}
            className="btn btn--accent btn--cta quest-page__btn"
          >
            Забронировать
          </Link>
        </div>
      </div>
    </main>
  );
}

export default QuestContent;
