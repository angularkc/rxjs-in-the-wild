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

  dataSource$ = this.dataService.getMessages('');
  displayedColumns = ['id', 'description', 'message'];

  constructor(private dataService: DataService) { }
}
