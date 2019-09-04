import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInEmptyFieldsComponent } from './fill-in-empty-fields.component';

describe('FillInEmptyFieldsComponent', () => {
  let component: FillInEmptyFieldsComponent;
  let fixture: ComponentFixture<FillInEmptyFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInEmptyFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInEmptyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
