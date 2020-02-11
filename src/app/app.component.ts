import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .app-wrapper {
        display: grid;
        grid-gap: 0.5rem;
        padding: 1rem;
      }
    `
  ]
})
export class AppComponent {
  routes = [
    {
      label: 'Members',
      value: 'members'
    },
    {
      label: 'Messages',
      value: 'messages'
    }
  ];
}
