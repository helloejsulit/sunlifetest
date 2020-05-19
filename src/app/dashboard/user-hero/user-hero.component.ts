import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { User } from "src/app/models/user.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-hero",
  templateUrl: "./user-hero.component.html",
  styleUrls: ["./user-hero.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHeroComponent implements OnInit {
  @Input()
  user: User;

  constructor(private router: Router) {}

  ngOnInit() {}

  imageError = ($event) => {
    $event.srcElement.src = "http://via.placeholder.com/640x360";
  };

  goToDashboard = () => {
    this.router.navigate(["dashboard"]);
  };
}
