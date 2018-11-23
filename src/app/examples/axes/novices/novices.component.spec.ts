import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovicesComponent } from './novices.component';

describe('NovicesComponent', () => {
  let component: NovicesComponent;
  let fixture: ComponentFixture<NovicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
