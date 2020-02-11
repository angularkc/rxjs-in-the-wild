import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {shareReplay, startWith, switchMap} from 'rxjs/operators';

interface FilterFormValue {
  description: string;
  userId: number;
}

@Component({
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  displayedColumns = ['id', 'description', 'message', 'user'];

  filterForm = new FormGroup({
    description: new FormControl(),
    userId: new FormControl()
  });
  filterFormStream$: Observable<FilterFormValue> = this.filterForm.valueChanges;

  users$ = this.dataService.usersFilters$;
  dataSource$ = this.filterFormStream$
    .pipe(
      startWith({} as any),
      switchMap((filters) => {
        return this.dataService.getMessages(filters.description, filters.userId);
      }))
    .pipe(shareReplay(1));

  constructor(private dataService: DataService) {}
}
