import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFilterComponent } from './upcoming-filter.component';

describe('UpcomingFilterComponent', () => {
  let component: UpcomingFilterComponent;
  let fixture: ComponentFixture<UpcomingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
