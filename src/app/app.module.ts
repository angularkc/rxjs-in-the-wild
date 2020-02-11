import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteFiltersComponent } from './site-filters/site-filters.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  }
];
@NgModule({
  declarations: [AppComponent, MembersComponent, MessagesComponent, SiteFiltersComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
