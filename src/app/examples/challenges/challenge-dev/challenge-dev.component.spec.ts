import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDevComponent } from './challenge-dev.component';

describe('ChallengeDevComponent', () => {
  let component: ChallengeDevComponent;
  let fixture: ComponentFixture<ChallengeDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
