import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeckComponent } from './heck.component';

describe('HeckComponent', () => {
  let component: HeckComponent;
  let fixture: ComponentFixture<HeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
