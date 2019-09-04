import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-labeled-text',
  templateUrl: './labeled-text.component.html',
  styleUrls: ['./labeled-text.component.scss']
})
export class LabeledTextComponent extends FieldType implements OnInit {
  label: string;
  value$: Observable<string>;

  ngOnInit(): void {
    this.label = this.to.label;
    this.value$ = this.formControl.valueChanges.pipe(
      startWith(this.formControl.value)
    );
  }
}
