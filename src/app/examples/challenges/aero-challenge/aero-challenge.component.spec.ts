import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroChallengeComponent } from './aero-challenge.component';

describe('AeroChallengeComponent', () => {
  let component: AeroChallengeComponent;
  let fixture: ComponentFixture<AeroChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
