import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {accountsSiteFilters, members, messages, policiesSiteFilters, users} from './data';
import {map} from 'rxjs/operators';



function filteringFunction(filterValue: string, valuesToFilter: any[], key: string) {
  return valuesToFilter.filter((value) => value[key].includes(filterValue));
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  policiesSiteFilters$ = of(policiesSiteFilters);

  accountsSiteFilters$ = of(accountsSiteFilters);

  members$ = of(members);

  users$ = of(users);

  messages$ = of(messages);

  getMembers(filter: string) {
    return this.members$.pipe(map(values => filteringFunction(filter, values, 'name')));
  }

  getMessages(filter: string) {
    return this.messages$.pipe(map(values => filteringFunction(filter, values, 'description')));
  }

}
