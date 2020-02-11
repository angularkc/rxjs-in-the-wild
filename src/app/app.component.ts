import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [{
    label: 'Members',
    value: 'members'
  }, {
    label: 'Messages',
    value: 'messages'
  }];
}
