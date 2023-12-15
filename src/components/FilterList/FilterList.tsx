import { memo, useState } from 'react';
import {
  FilterName,
  QuestLevelLocalized,
  QuestTypeLocalized,
  QuestType,
  QuestLevel,
} from '../../const';
import FilterItem from '../FilterItem/FilterItem';
import {
  TNewFilter,
  TQuestLevelText,
  TQuestLevelValue,
  TQuestTypeText,
  TQuestTypeValue,
} from '../../types/filter';

type TFilterListProps = {
  title: string;
  name: (typeof FilterName)[keyof typeof FilterName];
  data: typeof QuestLevelLocalized | typeof QuestTypeLocalized;
  defaultChecked: typeof QuestType.All | typeof QuestLevel.Any;
  onFilterChange: (newFilter: TNewFilter) => void;
};

function FilterList({
  title,
  data,
  name,
  defaultChecked,
  onFilterChange,
}: TFilterListProps) {
  const [radioChecked, setRadioChecked] = useState<
    TQuestTypeValue | TQuestLevelValue
  >(defaultChecked);

  const onRadioClick = (value: TQuestLevelValue | TQuestTypeValue) => {
    setRadioChecked(value);
    onFilterChange({ [name]: value });
  };

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{title}</legend>
      <ul className="filter__list">
        {Object.entries(data).map(([value, text]) => (
          <FilterItem
            key={value}
            value={value as TQuestLevelValue | TQuestTypeValue}
            text={text as TQuestLevelText | TQuestTypeText}
            name={name}
            radioChecked={radioChecked}
            onRadioClick={onRadioClick}
          />
        ))}
      </ul>
    </fieldset>
  );
}

const FilterListMemo = memo(FilterList);

export default FilterListMemo;
