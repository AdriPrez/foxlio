import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDataComponent } from './edicion-data.component';

describe('EdicionDataComponent', () => {
  let component: EdicionDataComponent;
  let fixture: ComponentFixture<EdicionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
