import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithLabelComponent } from './text-with-label.component';

describe('TextWithLabelComponent', () => {
  let component: TextWithLabelComponent;
  let fixture: ComponentFixture<TextWithLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextWithLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
