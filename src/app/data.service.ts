import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {accountsSiteFilters, members, messages, policiesSiteFilters, users} from './data';
import {map} from 'rxjs/operators';



function filteringFunction(filterValue: string, valuesToFilter: any[], key: string) {
  return valuesToFilter.filter((value) => value[key].includes(filterValue));
}

interface SiteFilters {
  policy: number;
  account: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Filter Data
  policiesSiteFilters$ = of(policiesSiteFilters);
  accountsSiteFilters$ = of(accountsSiteFilters);
  usersFilters$ = of(users);
  // Table Data
  members$ = of(members);
  messages$ = of(messages);

  // ==================== //
  // Your Code Here       //
  // ==================== //

  getMembers(filter: string) {
    return this.members$.pipe(map(values => filteringFunction(filter, values, 'name')));
  }

  getMessages(filter: string) {
    return this.messages$.pipe(map(values => filteringFunction(filter, values, 'description')));
  }

  applyFilters({policy, account}: SiteFilters) {
    // Trigger changes here
  }

}
