export interface Asset {
  name: string;
  total: number;
}

export interface AssetsList {
  total: number;
  list: Asset[];
}
