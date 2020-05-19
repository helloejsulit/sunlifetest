import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Router } from "@angular/router";
import { Policy } from "src/app/models/policy.interface";

@Component({
  selector: "app-policies",
  templateUrl: "./policies.component.html",
  styleUrls: ["./policies.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoliciesComponent implements OnInit {
  @Input()
  policies: Policy[];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPage = (page: string) => {
    this.router.navigate([page]);
  };
}
