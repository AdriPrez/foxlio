import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarinfoComponent } from './avatarinfo.component';

describe('AvatarinfoComponent', () => {
  let component: AvatarinfoComponent;
  let fixture: ComponentFixture<AvatarinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
