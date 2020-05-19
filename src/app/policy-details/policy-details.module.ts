import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PolicyDetailsPageRoutingModule } from "./policy-details-routing.module";

import { PolicyDetailsPage } from "./policy-details.page";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyDetailsPageRoutingModule,
  ],
  declarations: [PolicyDetailsPage, DetailComponent],
})
export class PolicyDetailsPageModule {}
