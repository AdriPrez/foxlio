import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgraundsComponent } from './backgraunds.component';

describe('BackgraundsComponent', () => {
  let component: BackgraundsComponent;
  let fixture: ComponentFixture<BackgraundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgraundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgraundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
