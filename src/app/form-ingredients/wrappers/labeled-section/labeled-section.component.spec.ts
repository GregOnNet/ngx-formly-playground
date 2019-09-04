import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledSectionComponent } from './labeled-section.component';

describe('LabeledSectionComponent', () => {
  let component: LabeledSectionComponent;
  let fixture: ComponentFixture<LabeledSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
