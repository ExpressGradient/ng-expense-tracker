import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GroupsComponent } from "./groups.component";
import { GroupsRoutingModule } from "./groups-routing.module";
import { GroupComponent } from "./group/group.component";
import { GroupRoutingModule } from "./group/group-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [ CommonModule, GroupsRoutingModule, FormsModule, GroupRoutingModule ],
  declarations: [ GroupsComponent, GroupComponent ],
  exports: [ GroupsComponent ]
})
export class GroupsModule {  }
