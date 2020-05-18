import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpandedDashboardPageRoutingModule } from './expanded-dashboard-routing.module';

import { ExpandedDashboardPage } from './expanded-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandedDashboardPageRoutingModule
  ],
  declarations: [ExpandedDashboardPage]
})
export class ExpandedDashboardPageModule {}
