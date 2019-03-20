import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadReferancesComponent } from './upload-referances.component';

describe('UploadReferancesComponent', () => {
  let component: UploadReferancesComponent;
  let fixture: ComponentFixture<UploadReferancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadReferancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadReferancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
