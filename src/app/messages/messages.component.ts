import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, shareReplay, startWith, switchMap } from 'rxjs/operators';

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
  filterFormStream$: Observable<FilterFormValue> = this.filterForm.valueChanges.pipe(
    debounceTime(300),
    startWith({} as any)
  );

  users$ = this.dataService.usersFilters$;
  dataSource$ = this.filterFormStream$
    .pipe(
      switchMap(filters => this.dataService.getMessages(filters.description, filters.userId)),
      shareReplay(1)
    );

  constructor(private dataService: DataService) {}
}
