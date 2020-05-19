import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { UserResolver } from "./services/user.resolver";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardPageModule),
  },
  {
    path: "expanded-dashboard",
    loadChildren: () =>
      import("./expanded-dashboard/expanded-dashboard.module").then(
        (m) => m.ExpandedDashboardPageModule
      ),
    resolve: { user: UserResolver },
  },
  {
    path: "policy-details",
    loadChildren: () =>
      import("./policy-details/policy-details.module").then(
        (m) => m.PolicyDetailsPageModule
      ),
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
