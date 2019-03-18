import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpkeakerContentComponent } from './manage-spkeaker-content.component';

describe('ManageSpkeakerContentComponent', () => {
  let component: ManageSpkeakerContentComponent;
  let fixture: ComponentFixture<ManageSpkeakerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSpkeakerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSpkeakerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
