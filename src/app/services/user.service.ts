import { Injectable } from "@angular/core";
import { User } from "../models/user.interface";
import { PolicyService } from "./policy.service";
import { Policy } from "../models/policy.interface";
import { AssetService } from "./asset.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User = {
    id: 1,
    name: "Chu Ying, Rebecca",
    avatar: "assets/avataaars.svg",
    policies: [],
  };

  constructor(
    private policyService: PolicyService,
    private assetService: AssetService
  ) {
    this.getPolicy();
    this.getAssets();
  }

  get currentUser(): User {
    return this.user;
  }

  getPolicy = () => {
    this.user.policies = this.policyService.getUserPolicies(this.user.id);
  };

  getAssets = () => {
    this.user.assets = this.assetService.getUserAssets(this.user.id);
  };
}
