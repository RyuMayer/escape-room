import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuest } from '../../store/quest/quest.action';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectQuest } from '../../store/quest/quest.selector';
import { AppRoute, QuestLevelLocalized, QuestTypeLocalized } from '../../const';
import { dropQuestData } from '../../store/quest/quest';

function QuestContent() {
  const dispatch = useAppDispatch();

  const { questId } = useParams();
  const quest = useAppSelector(selectQuest);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuest(questId));
    }

    return () => {
      dispatch(dropQuestData());
    };
  }, [dispatch, questId]);

  return (
    <main className="decorated-page quest-page">
      {quest && (
        <>
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet={quest.coverImgWebp} />
              <img
                src={quest.coverImg}
                // srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
                width={1366}
                height={768}
                alt=""
              />
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
                to={`${AppRoute.Quest}/${questId}${AppRoute.Booking}`}
                state={{ title: quest.title }}
                className="btn btn--accent btn--cta quest-page__btn"
              >
                Забронировать
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default QuestContent;
