import { TMapIcon } from './types/map';

export const BASE_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room';
export const REQUEST_TIMEOUT = 5000;

export const QuestLevel = {
  Any: 'any',
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
} as const;

export const QuestLevelLocalized = {
  [QuestLevel.Any]: 'любой',
  [QuestLevel.Easy]: 'лёгкий',
  [QuestLevel.Medium]: 'средний',
  [QuestLevel.Hard]: 'сложный',
} as const;

export const QuestType = {
  All: 'all',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
} as const;

export const QuestTypeLocalized = {
  [QuestType.All]: 'все квесты',
  [QuestType.Adventures]: 'приключения',
  [QuestType.Horror]: 'ужасы',
  [QuestType.Mystic]: 'мистика',
  [QuestType.Detective]: 'детектив',
  [QuestType.SciFi]: 'sci-fi',
} as const;

export const QuestTypeIconSize = {
  [QuestType.All]: [26, 30],
  [QuestType.Adventures]: [36, 30],
  [QuestType.Horror]: [30, 30],
  [QuestType.Mystic]: [30, 30],
  [QuestType.Detective]: [40, 30],
  [QuestType.SciFi]: [28, 30],
} as const;

export const QuestSlot = {
  Today: 'today',
  Tomorrow: 'tomorrow',
} as const;

export const QuestSlotLocalized = {
  [QuestSlot.Today]: 'сегодня',
  [QuestSlot.Tomorrow]: 'завтра',
} as const;

export const AppRoute = {
  Main: '/',
  Quest: '/quest',
  Contacts: '/contacts',
  Booking: '/booking',
  Login: '/login',
  Reservation: '/reservation',
} as const;

export const FilterName = {
  Type: 'type',
  Level: 'level',
} as const;

export const APIRoute = {
  Quests: '/quest',
  Login: '/login',
  Logout: '/logout',
  Reservation: '/reservation',
} as const;

export const StoreNameSpace = {
  Quests: 'QUESTS',
  Quest: 'QUEST',
  Booking: 'BOOKING',
  User: 'USER',
  Reservation: 'RESERVATION',
} as const;

export const LoadingStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Rejected: 'rejected',
} as const;

export const MapIconConfig: TMapIcon = {
  Default: {
    url: '/img/svg/pin-default.svg',
    width: 38,
    height: 49,
    anchorX: 19,
    anchorY: 49,
  },
  Active: {
    url: '/img/svg/pin-active.svg',
    width: 38,
    height: 49,
    anchorX: 19,
    anchorY: 49,
  },
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;
