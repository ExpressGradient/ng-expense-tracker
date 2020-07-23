import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActivitiesComponent } from "./activities.component";
import { ActivityComponent } from "./activity/activity.component";
import { ActivitiesRoutingModule } from "./activities-routing.module";
import { ActivityRoutingModule } from "./activity/activity-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [ CommonModule, ActivitiesRoutingModule, FormsModule, ActivityRoutingModule ],
  declarations: [ ActivitiesComponent, ActivityComponent ],
  exports: [ ActivitiesComponent ]
})
export class ActivitiesModule {  }
