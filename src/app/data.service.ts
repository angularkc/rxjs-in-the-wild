import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {accountsSiteFilters, members, messages, policiesSiteFilters, users} from './data';
import {map, tap} from 'rxjs/operators';



function filterByString(filterValue: string, valuesToFilter: any[], key: string) {
  if (!filterValue) return valuesToFilter;
  return valuesToFilter.filter((value) => value[key].includes(filterValue));
}

function filterByEquality(filterValue: any, valuesToFilter: any[], key: string) {
  if (filterValue === null || filterValue === undefined) return valuesToFilter;
  return valuesToFilter.filter((value) => value[key] === filterValue);
}

interface SiteFilters {
  policy: number;
  account: number;
}

interface SiteParams {
  filterString?: string;
  userId?: number;
}

const mockHttp =  {
  get(path: 'messages' | 'members', params?: SiteParams) {
    let request;
    if (path === 'messages') {
      request = of(messages).pipe(
        map(values => filterByString(params.filterString, values, 'description')),
        map(values => filterByEquality(params.userId, values, 'user'))
      );
    } else if (path === 'members') {
      request = of(members);
    }

    return request.pipe(tap(val => {
      console.log(`Request made for '${path}'`, val);
    }));
  }
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  mockHttp = mockHttp;

  // Filter Data
  policiesSiteFilters$ = of(policiesSiteFilters);
  accountsSiteFilters$ = of(accountsSiteFilters);
  usersFilters$ = of(users);



  // ==================== //
  // Your Code Here       //
  // ==================== //

  getMembers(filterString: string) {
    return this.mockHttp.get('members', {
      filterString
    });
  }

  getMessages(filterString?: string, userId?: number) {
    return this.mockHttp.get('messages', {
      filterString,
      userId
    });
  }

  applyFilters({policy, account}: SiteFilters) {
    // Trigger changes here
  }

}
