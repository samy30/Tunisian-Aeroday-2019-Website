import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCaoComponent } from './challenge-cao.component';

describe('ChallengeCaoComponent', () => {
  let component: ChallengeCaoComponent;
  let fixture: ComponentFixture<ChallengeCaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
