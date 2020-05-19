import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardPageRoutingModule } from "./dashboard-routing.module";

import { DashboardPage } from "./dashboard.page";
import { UserHeroComponent } from "./user-hero/user-hero.component";
import { NavComponent } from "./nav/nav.component";
import { NavItemComponent } from "./nav/nav-item/nav-item.component";
import { PoliciesComponent } from "./policies/policies.component";
import { PolicyComponent } from "./policies/policy/policy.component";
import { NoteComponent } from "./note/note.component";
import { AssetsListComponent } from "./assets-list/assets-list.component";
import { AssetComponent } from "./assets-list/asset/asset.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  declarations: [
    DashboardPage,
    UserHeroComponent,
    NavComponent,
    NavItemComponent,
    PoliciesComponent,
    PolicyComponent,
    NoteComponent,
    AssetsListComponent,
    AssetComponent,
  ],
})
export class DashboardPageModule {}
