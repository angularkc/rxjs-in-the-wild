import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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

  users;
  dataSource;

  constructor(private dataService: DataService) {
    this.dataService.getMessages('').subscribe(value => {
      this.dataSource = value;
    });
    this.dataService.usersFilters$.subscribe(value => {
      this.users = value;
    });
  }
}
