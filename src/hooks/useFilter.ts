import { useCallback, useEffect, useState } from 'react';

import { FilterName, QuestLevel, QuestType } from '../const';
import { TQuestLevel, TQuestPreview, TQuestType } from '../types/quest';
import { TNewFilter } from '../types/filter';

type TUseFilterProps = {
  quests: TQuestPreview[];
};

type TFilterState = {
  [FilterName.Type]: TQuestType;
  [FilterName.Level]: TQuestLevel;
};

function useFilter({
  quests,
}: TUseFilterProps): [TQuestPreview[], (newFilter: TNewFilter) => void] {
  const [filters, setFilters] = useState<TFilterState>({
    [FilterName.Type]: QuestType.All,
    [FilterName.Level]: QuestLevel.Any,
  });

  const [filteredData, setFilteredData] = useState<TQuestPreview[]>(quests);

  useEffect(() => {
    if (quests.length !== 0) {
      setFilteredData(
        quests.filter((el) => {
          const isLevelMatch =
            filters.level === QuestLevel.Any || el.level === filters.level;

          const isTypeMatch =
            filters.type === QuestType.All || el.type === filters.type;

          return isLevelMatch && isTypeMatch;
        }),
      );
    }
  }, [filters, quests]);

  const onFilterChange = useCallback((newFilter: TNewFilter) => {
    setFilters((prevValue) => ({
      ...prevValue,
      ...newFilter,
    }));
  }, []);

  return [filteredData, onFilterChange];
}

export default useFilter;
