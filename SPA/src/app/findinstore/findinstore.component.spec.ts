import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindinstoreComponent } from './findinstore.component';

describe('FindinstoreComponent', () => {
  let component: FindinstoreComponent;
  let fixture: ComponentFixture<FindinstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindinstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindinstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
