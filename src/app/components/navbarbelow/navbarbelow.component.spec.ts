import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbelowComponent } from './navbarbelow.component';

describe('NavbarbelowComponent', () => {
  let component: NavbarbelowComponent;
  let fixture: ComponentFixture<NavbarbelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarbelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarbelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
