import { memo } from 'react';

import FilterList from '../../components/FilterList/FilterList';
import {
  FilterName,
  QuestLevel,
  QuestLevelLocalized,
  QuestType,
  QuestTypeLocalized,
} from '../../const';
import { TNewFilter } from '../../types/filter';

type TMainFiltersProps = {
  onFilterChange: (newFilter: TNewFilter) => void;
};

function MainFilters({ onFilterChange }: TMainFiltersProps) {
  return (
    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <FilterList
          title="Тематика"
          name={FilterName.Type}
          data={QuestTypeLocalized}
          defaultChecked={QuestType.All}
          onFilterChange={onFilterChange}
        />
        <FilterList
          title="Сложность"
          name={FilterName.Level}
          data={QuestLevelLocalized}
          defaultChecked={QuestLevel.Any}
          onFilterChange={onFilterChange}
        />
      </form>
    </div>
  );
}

const MainFiltersMemo = memo(MainFilters);
export default MainFiltersMemo;
