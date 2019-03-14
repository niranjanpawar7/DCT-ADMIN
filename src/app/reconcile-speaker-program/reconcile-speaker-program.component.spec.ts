import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcileSpeakerProgramComponent } from './reconcile-speaker-program.component';

describe('ReconcileSpeakerProgramComponent', () => {
  let component: ReconcileSpeakerProgramComponent;
  let fixture: ComponentFixture<ReconcileSpeakerProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconcileSpeakerProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconcileSpeakerProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
