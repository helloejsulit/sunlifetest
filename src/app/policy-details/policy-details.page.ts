import { Component, OnInit } from "@angular/core";
import { PolicyService } from "../services/policy.service";
import { PolicyDetails } from "../models/policy.interface";

@Component({
  selector: "app-policy-details",
  templateUrl: "./policy-details.page.html",
  styleUrls: ["./policy-details.page.scss"],
})
export class PolicyDetailsPage implements OnInit {
  policyDetails: PolicyDetails[];

  constructor(private policyService: PolicyService) {}

  ngOnInit() {
    this.policyDetails = this.policyService.getPolicyDetails();
  }
}
