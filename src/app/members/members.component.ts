import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {FormControl} from '@angular/forms';
import {map, shareReplay} from 'rxjs/operators';


@Component({
  templateUrl: './members.component.html'
})
export class MembersComponent {
  displayedColumns = ['id', 'name', 'age', 'occupation', 'country'];

  filterControl = new FormControl();
  filterControlStream$ = this.filterControl.valueChanges;

  dataSource$ = this.dataService.getMembers('').pipe(shareReplay(1));

  constructor(private dataService: DataService) {}
}
