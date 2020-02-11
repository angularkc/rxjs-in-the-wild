import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-site-filters',
  templateUrl: './site-filters.component.html',
  styles: [`
  .site-filters {
    display: grid;
    align-items: center;
    justify-content: start;
    grid-template-columns: repeat(2, 200px) auto;
    grid-gap: 1rem;
  }
  `]
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
