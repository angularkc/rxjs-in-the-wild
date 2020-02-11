import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent {
  filterControl = new FormControl();
  filterControlStream$ = this.filterControl.valueChanges;

  dataSource;
  displayedColumns = ['id', 'description', 'message', 'user'];

  constructor(private dataService: DataService) {
    this.dataService.getMessages('').subscribe(value => {
      this.dataSource = value;
    });
  }
}
