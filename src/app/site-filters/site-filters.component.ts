import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-site-filters',
  templateUrl: './site-filters.component.html',
  styles: []
})
export class SiteFiltersComponent {
  accounts$ = this.dataService.accountsSiteFilters$;
  policies$ = this.dataService.policiesSiteFilters$;
  selectedPolicy;
  selectedAccount;
  constructor(private dataService: DataService) { }

  applyFilters() {
    this.dataService.applyFilters({
      policy: this.selectedPolicy,
      account: this.selectedAccount
    });
  }
}
