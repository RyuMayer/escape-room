import { FilterName, QuestLevelLocalized, QuestTypeLocalized } from '../const';
import { TQuestLevel, TQuestType } from './quest';

export type TNewFilter = {
  [FilterName.Type]?: TQuestType;
  [FilterName.Level]?: TQuestLevel;
};

export type TQuestTypeValue = keyof typeof QuestTypeLocalized;

export type TQuestLevelValue = keyof typeof QuestLevelLocalized;

export type TQuestTypeText =
  (typeof QuestTypeLocalized)[keyof typeof QuestTypeLocalized];

export type TQuestLevelText =
  (typeof QuestLevelLocalized)[keyof typeof QuestLevelLocalized];
