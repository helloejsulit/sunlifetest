import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  showToolbar: boolean;

  constructor() {}

  ngOnInit() {}

  onScroll = ($event: CustomEvent<ScrollDetail>) => {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 120;
    }
  };
}
