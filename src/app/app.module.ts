import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoworkerCreateComponent } from './components/coworker-create/coworker-create.component';
import { CoworkerDetailsComponent } from './components/coworker-details/coworker-details.component';
import { CoworkerListComponent } from './components/coworker-list/coworker-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CoworkerCreateComponent,
    CoworkerDetailsComponent,
    CoworkerListComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
