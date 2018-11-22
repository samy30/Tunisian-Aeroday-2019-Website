import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroModelismeComponent } from './aero-modelisme.component';

describe('AeroModelismeComponent', () => {
  let component: AeroModelismeComponent;
  let fixture: ComponentFixture<AeroModelismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroModelismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroModelismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
