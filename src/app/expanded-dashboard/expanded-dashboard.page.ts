import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { User } from "../models/user.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-expanded-dashboard",
  templateUrl: "./expanded-dashboard.page.html",
  styleUrls: ["./expanded-dashboard.page.scss"],
})
export class ExpandedDashboardPage implements OnInit {
  showToolbar: boolean;
  currentUser: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((u) => {
      this.currentUser = u.user;
    });
  }

  onScroll = ($event: CustomEvent<ScrollDetail>) => {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 120;
    }
  };
}
