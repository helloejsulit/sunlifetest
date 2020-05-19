import { Policy } from "./policy.interface";
import { AssetsList } from "./asset.interface";

export interface User {
  id: number;
  name: string;
  avatar: string;
  policies: Policy[];
  assets?: AssetsList;
}
