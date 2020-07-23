import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GroupComponent } from "./group.component";

const routes: Routes = [
  {
    path: 'groups/:title', component: GroupComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GroupRoutingModule {  }
