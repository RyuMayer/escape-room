export const BASE_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room';
export const REQUEST_TIMEOUT = 5000;

export const questLevels = ['easy', 'medium', 'hard'] as const;

export const questTypes = [
  'adventures',
  'horror',
  'mystic',
  'detective',
  'sci-fi',
] as const;

export const APIRoute = {
  Quests: '/quest',
} as const;

export const StoreNameSpace = {
  Quests: 'QUESTS',
};

export const LoadingStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Rejected: 'rejected',
} as const;
