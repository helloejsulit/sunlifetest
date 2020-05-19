import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PolicyServices } from "src/app/models/policy.interface";

@Component({
  selector: "app-policy-services",
  templateUrl: "./policy-services.component.html",
  styleUrls: ["./policy-services.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyServicesComponent implements OnInit {
  @Input()
  policyServices: PolicyServices[];

  constructor() {}

  ngOnInit() {}
}
