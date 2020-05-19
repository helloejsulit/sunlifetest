import { Injectable } from "@angular/core";
import { Policy, PolicyServices } from "../models/policy.interface";

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

  services: PolicyServices[] = [
    {
      header: "Move value from one policy to another",
      icon: "document-attach-outline",
      items: [
        { title: "Pay with Policy Value" },
        { title: "Standing Instructions" },
      ],
    },
    {
      header: "Cash out your policy values",
      icon: "document-attach-outline",
      items: [{ title: "Value Withdrawal" }, { title: "Payout Method" }],
    },
    {
      header: "Take a loan against your policy value",
      icon: "document-attach-outline",
      items: [{ title: "Loans" }],
    },
  ];

  constructor() {}

  getUserPolicies = (userId: number): Policy[] => {
    if (userId === 1) {
      return this.policies;
    }
  };

  getPolicyServicing = (): PolicyServices[] => {
    return this.services;
  };
}
