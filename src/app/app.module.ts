import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SiteFiltersComponent } from './site-filters/site-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent,
    SiteFiltersComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
