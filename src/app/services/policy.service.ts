import { Injectable } from "@angular/core";
import {
  Policy,
  PolicyServices,
  PolicyDetails,
} from "../models/policy.interface";

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
      icon: "basket-outline",
      items: [{ title: "Value Withdrawal" }, { title: "Payout Method" }],
    },
    {
      header: "Take a loan against your policy value",
      icon: "cash-outline",
      items: [{ title: "Loans" }],
    },
    {
      header: "Payment options for your premiums",
      icon: "card-outline",
      items: [{ title: "Premium Payment Method" }],
    },
  ];

  details: PolicyDetails[] = [
    {
      title: "LifeSuper 20",
      policyNum: 601007042,
      status: "Inforce",
      isDue: true,
      details: [
        {
          name: "Sum Assured",
          value: 5900000,
        },
        {
          name: "Surrender Value*",
          value: 240770,
        },
        {
          name: "Modal Premium / Regular Contribution including Levy",
          value: 3441,
        },
      ],
    },
    {
      title: "Sun Architect",
      policyNum: 201491780,
      status: "Inforce",
      isDue: false,
      details: [
        {
          name: "Contribution Amount",
          value: 11066,
        },
        {
          name: "Fund Balance*",
          value: 10539,
        },
        {
          name: "Surrender Value",
          value: 7337,
        },
        {
          name: "Modal Premium / Regular Contribution including Levy",
          value: 3441,
        },
      ],
    },
    {
      title: "Critical Medical Care Plan II",
      policyNum: 428267442,
      status: "Inforce",
      isDue: false,
      details: [
        {
          name: "Amount of Benefit",
          value: 500000,
        },
        {
          name: "Modal Premium / Regular Contribution including Levy",
          value: 3441,
        },
      ],
    },
    {
      title: "SunEducator 5",
      policyNum: 60158495,
      status: "Inforce",
      isDue: false,
      details: [
        {
          name: "Amount of Benefit",
          value: 25000,
        },
        {
          name: "Cash Value*",
          value: 2046,
        },
        {
          name: "Surrender Value",
          value: 2251,
        },
        {
          name: "Modal Premium / Regular Contribution including Levy",
          value: 3441,
        },
      ],
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

  getPolicyDetails = (): PolicyDetails[] => {
    return this.details;
  };
}
