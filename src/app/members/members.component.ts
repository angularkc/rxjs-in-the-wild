import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import {debounceTime, shareReplay, startWith, switchMap} from 'rxjs/operators';

@Component({
  templateUrl: './members.component.html'
})
export class MembersComponent {
  displayedColumns = ['id', 'name', 'age', 'occupation', 'country'];

  filterControl = new FormControl();
  filterControlStream$ = this.filterControl.valueChanges.pipe(
    debounceTime(300),
    startWith('')
  );

  dataSource$ = this.filterControlStream$.pipe(
    switchMap(value => this.dataService.getMembers(value)),
    shareReplay(1)
  );

  constructor(private dataService: DataService) {}
}
