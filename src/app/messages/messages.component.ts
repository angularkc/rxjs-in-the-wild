import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {map} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

function filteringFunction(filterValue: string, valuesToFilter: {description: string}[]) {
  return valuesToFilter.filter((value) => value.description.includes(filterValue));
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent {
  filterControl = new FormControl();
  filterControlStream$ = this.filterControl.valueChanges;

  dataSource$ = this.dataService.messages$.pipe(map(val => filteringFunction('Poly', val)));
  displayedColumns = ['id', 'description', 'message'];

  constructor(private dataService: DataService) { }
}
