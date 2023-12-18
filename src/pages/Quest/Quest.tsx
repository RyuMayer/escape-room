import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuest } from '../../store/quest/quest.action';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectLoadingStatus,
  selectQuest,
} from '../../store/quest/quest.selector';
import { dropQuestData } from '../../store/quest/quest';
import Loading from '../../components/Loading/Loading';
import QuestContent from '../../components/QuestContent/QuestContent';

function Quest() {
  const dispatch = useAppDispatch();

  const { questId } = useParams();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const quest = useAppSelector(selectQuest);
  const isLoading = useAppSelector(selectLoadingStatus);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuest(questId))
        .unwrap()
        .then(() => setIsDataLoaded(true));
    }

    return () => {
      dispatch(dropQuestData());
    };
  }, [dispatch, questId]);

  return (
    <Loading loadingStatus={isLoading} isDataLoaded={isDataLoaded}>
      {quest === null ? (
        <h1>Ошибка при загрузки описания квеста</h1>
      ) : (
        <QuestContent quest={quest} />
      )}
    </Loading>
  );
}

export default Quest;
