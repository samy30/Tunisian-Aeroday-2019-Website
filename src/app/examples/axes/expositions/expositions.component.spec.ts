import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositionsComponent } from './expositions.component';

describe('ExpositionsComponent', () => {
  let component: ExpositionsComponent;
  let fixture: ComponentFixture<ExpositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
