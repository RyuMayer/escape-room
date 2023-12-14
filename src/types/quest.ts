import { questLevels, questTypes } from '../const';

export type TQuestPreview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: (typeof questLevels)[number];
  type: (typeof questTypes)[number];
  peopleMinMax: [number, number];
};
