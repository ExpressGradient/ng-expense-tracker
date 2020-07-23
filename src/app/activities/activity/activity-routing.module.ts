import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityComponent } from "./activity.component";

const routes: Routes = [
  {
    path: 'activities/:title', component: ActivityComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ActivityRoutingModule {  }
