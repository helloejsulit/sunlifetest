import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { UserService } from "../services/user.service";
import { User } from "../models/user.interface";
import { Policy } from "../models/policy.interface";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  showToolbar: boolean;
  currentUser: User;
  userPolicies: Policy[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  onScroll = ($event: CustomEvent<ScrollDetail>) => {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 120;
    }
  };
}
