import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuests } from '../../store/quests/quests.action';
import QuestCard from '../../components/QuestCard/QuestCard';
import useFilter from '../../hooks/useFilter';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectLoadingStatus,
  selectQuests,
} from '../../store/quests/quests.selector';
import MainFilters from '../MainFilters/MainFilters';
import { dropQuestsData } from '../../store/quests/quests';
import Loading from '../Loading/Loading';

function MainContent() {
  const dispatch = useAppDispatch();

  const quests = useAppSelector(selectQuests);
  const isLoading = useAppSelector(selectLoadingStatus);

  const [filteredQuests, setFilter] = useFilter({ quests });
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchQuests())
      .unwrap()
      .then(() => setIsDataLoaded(true));

    return () => {
      dispatch(dropQuestsData());
    };
  }, [dispatch]);

  return (
    <>
      <MainFilters onFilterChange={setFilter} />
      <h2 className="title visually-hidden">Выберите квест</h2>
      <Loading loadingStatus={isLoading} isDataLoaded={isDataLoaded}>
        {filteredQuests.length === 0 ? (
          <h1>Нет доступных квестов</h1>
        ) : (
          <div className="cards-grid">
            {filteredQuests.map((quest) => (
              <QuestCard key={quest.id} questData={quest} />
            ))}
          </div>
        )}
      </Loading>
    </>
  );
}

export default MainContent;
