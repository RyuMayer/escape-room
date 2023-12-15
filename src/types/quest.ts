import { QuestLevel, QuestType } from '../const';

export type TQuestLevel = (typeof QuestLevel)[keyof typeof QuestLevel];

export type TQuestType = (typeof QuestType)[keyof typeof QuestType];

export type TQuestPreview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<TQuestLevel, 'any'>;
  type: Exclude<TQuestType, 'all'>;
  peopleMinMax: [number, number];
};

export type TQuest = {
  description: string;
  coverImg: string;
  coverImgWebp: string;
} & TQuestPreview;
