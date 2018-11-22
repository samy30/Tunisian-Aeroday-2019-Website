import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroEntrepreneurComponent } from './aero-entrepreneur.component';

describe('AeroEntrepreneurComponent', () => {
  let component: AeroEntrepreneurComponent;
  let fixture: ComponentFixture<AeroEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
