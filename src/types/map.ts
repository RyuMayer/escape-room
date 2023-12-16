export type TMapIcon = {
  [K in 'Default' | 'Active']: TIconConfig;
};

export type TIconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};
