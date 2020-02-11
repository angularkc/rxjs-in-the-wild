import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFiltersComponent } from './site-filters.component';

describe('SiteFiltersComponent', () => {
  let component: SiteFiltersComponent;
  let fixture: ComponentFixture<SiteFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
