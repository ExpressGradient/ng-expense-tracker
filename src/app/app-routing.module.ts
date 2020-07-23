import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/activities'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '/activities'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }
