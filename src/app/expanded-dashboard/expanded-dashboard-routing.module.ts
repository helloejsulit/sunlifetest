import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpandedDashboardPage } from './expanded-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ExpandedDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpandedDashboardPageRoutingModule {}
