import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ExpandedDashboardPageRoutingModule } from "./expanded-dashboard-routing.module";

import { ExpandedDashboardPage } from "./expanded-dashboard.page";
import { UserHeroComponent } from "../dashboard/user-hero/user-hero.component";
import { NavComponent } from "../dashboard/nav/nav.component";
import { NavItemComponent } from "../dashboard/nav/nav-item/nav-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandedDashboardPageRoutingModule,
  ],
  declarations: [
    ExpandedDashboardPage,
    UserHeroComponent,
    NavComponent,
    NavItemComponent,
  ],
})
export class ExpandedDashboardPageModule {}
