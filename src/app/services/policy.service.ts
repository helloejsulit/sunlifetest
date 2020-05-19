import { Injectable } from "@angular/core";
import { Policy } from "../models/policy.interface";

@Injectable({
  providedIn: "root",
})
export class PolicyService {
  policies: Policy[] = [
    {
      title: "Life",
      details: "HKD 6,146,066",
      icon: {
        name: "pulse-outline",
        bgcolor: "#DA1F46",
      },
    },
    {
      title: "Critical Illness",
      details: "up to HKD 1,000,000*",
      icon: {
        name: "bandage-outline",
        bgcolor: "#003946",
      },
    },
    {
      title: "Medical & Hosp",
      details: "up to: HKD 721,800/year, HKD 600,000/disability",
      icon: {
        name: "business-outline",
        bgcolor: "#00B3BC",
      },
    },
    {
      title: "Accident",
      details: "up to HKD 1,000,000",
      icon: {
        name: "heart",
        bgcolor: "#FFCC05",
      },
    },
  ];

  constructor() {}

  getUserPolicies = (userId: number): Policy[] => {
    if (userId === 1) {
      return this.policies;
    }
  };
}
