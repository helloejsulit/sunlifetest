import { Injectable } from "@angular/core";
import { AssetsList } from "../models/asset.interface";

@Injectable({
  providedIn: "root",
})
export class AssetService {
  assetsList: AssetsList = {
    list: [
      {
        name: "Investment-Linked",
        total: 10539,
      },
      {
        name: "Savings",
        total: 161688,
      },
    ],
    total: 255309,
  };

  constructor() {}

  getUserAssets = (userId: number) => {
    if (userId === 1) {
      return this.assetsList;
    }
  };
}
