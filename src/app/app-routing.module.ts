import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoworkerCreateComponent} from "./components/coworker-create/coworker-create.component";
import {CoworkerDetailsComponent} from "./components/coworker-details/coworker-details.component";
import {CoworkerListComponent} from "./components/coworker-list/coworker-list.component";
const routes: Routes = [
  { path: '', redirectTo: 'coworkers', pathMatch: 'full'},
  { path: 'add', component: CoworkerCreateComponent },
  { path: 'coworkers/:id', component: CoworkerDetailsComponent },
  { path: 'coworkers', component: CoworkerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
