import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ActivitiesModule } from "./activities/activities.module";
import { GroupsModule } from "./groups/groups.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [ BrowserModule, ActivitiesModule, GroupsModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }
