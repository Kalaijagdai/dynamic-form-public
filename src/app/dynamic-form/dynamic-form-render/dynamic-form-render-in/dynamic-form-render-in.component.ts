import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models';
@Component({
  selector: 'dynamic-form-render-in',
  templateUrl: 'dynamic-form-render-in.html',
  styleUrls: ['dynamic-form-render-in.scss']
})

export class DynamicFormRenderInComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    if (this.question.key.length > 0) {
      return this.form.controls[this.question.key].valid;
    }
    return false
  }
}
