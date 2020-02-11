import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {FormControl} from '@angular/forms';

function filteringFunction(filterValue: string, valuesToFilter: {name: string}[]) {
  return valuesToFilter.filter((value) => value.name.includes(filterValue));
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styles: []
})
export class MembersComponent {
  filterControl = new FormControl();
  filterControlStream$ = this.filterControl.valueChanges;

  dataSource$ = this.dataService.members$;
  displayedColumns = ['id', 'name', 'age', 'occupation', 'country'];


  constructor(private dataService: DataService) { }
}
