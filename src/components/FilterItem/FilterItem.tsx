import { ChangeEvent } from 'react';
import { FilterName, QuestTypeIconSize } from '../../const';
import {
  TQuestLevelText,
  TQuestLevelValue,
  TQuestTypeText,
  TQuestTypeValue,
} from '../../types/filter';
import { capitalizeFirstCharacter } from '../../utils/utils';

type TFilterItemProps = {
  value: TQuestLevelValue | TQuestTypeValue;
  text: TQuestLevelText | TQuestTypeText;
  name: (typeof FilterName)[keyof typeof FilterName];
  radioChecked: TQuestTypeValue | TQuestLevelValue;
  onRadioClick: (value: TQuestLevelValue | TQuestTypeValue) => void;
};

function FilterItem({
  value,
  text,
  name,
  radioChecked,
  onRadioClick,
}: TFilterItemProps) {
  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>) => {
    onRadioClick(e.target.value as TQuestLevelValue | TQuestTypeValue);
  };

  return (
    <li className="filter__item">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        checked={radioChecked === value}
        onChange={handleRadioClick}
      />
      <label className="filter__label" htmlFor={value}>
        {name === FilterName.Type && (
          <svg
            className="filter__icon"
            width={QuestTypeIconSize[value as TQuestTypeValue][0]}
            height={QuestTypeIconSize[value as TQuestTypeValue][1]}
            aria-hidden="true"
          >
            <use xlinkHref={`#icon-${value}`}></use>
          </svg>
        )}
        <span className="filter__label-text">
          {capitalizeFirstCharacter(text)}
        </span>
      </label>
    </li>
  );
}

export default FilterItem;
