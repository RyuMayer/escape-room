import { questLevels, questTypes } from '../const';

export type questPreview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: (typeof questLevels)[number];
  type: (typeof questTypes)[number];
  peopleMinMax: [number, number];
};
