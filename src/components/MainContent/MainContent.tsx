import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuests } from '../../store/quests/quests.action';
import QuestCard from '../../components/QuestCard/QuestCard';
import useFilter from '../../hooks/useFilter';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectQuests } from '../../store/quests/quests.selector';
import MainFilters from '../MainFilters/MainFilters';

function MainContent() {
  const dispatch = useAppDispatch();

  const quests = useAppSelector(selectQuests);
  const [filteredQuests, setFilter] = useFilter({ quests });

  useEffect(() => {
    dispatch(fetchQuests());
  }, [dispatch]);

  return (
    <>
      <MainFilters onFilterChange={setFilter} />
      <h2 className="title visually-hidden">Выберите квест</h2>
      <div className="cards-grid">
        {/* TODO: Сделать спиннер */}
        {filteredQuests.length === 0
          ? 'Не найдено квестов'
          : filteredQuests.map((quest) => (
              <QuestCard key={quest.id} questData={quest} />
            ))}
      </div>
    </>
  );
}

export default MainContent;
