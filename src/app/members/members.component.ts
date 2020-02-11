import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styles: []
})
export class MembersComponent {
  filterControl = new FormControl();
  filterControlStream$ = this.filterControl.valueChanges;

  dataSource$ = this.dataService.getMembers('');
  displayedColumns = ['id', 'name', 'age', 'occupation', 'country'];


  constructor(private dataService: DataService) { }
}
