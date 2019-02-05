import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormRenderControlService } from './services/dynamic-form-render-control.service';

@Component({
  selector: 'app-dynamic-form-render',
  templateUrl: './dynamic-form-render.component.html'
})
export class DynamicFormRenderComponent implements OnInit {
  @Input() noSubmit: boolean = true;
  @Input() questions: any[];
  @Output() submitRender = new EventEmitter();
  form: FormGroup;
  isLoad: boolean = false;
  constructor(
    private qcs: DynamicFormRenderControlService
  ) { }
  ngOnInit() {
    this.questions = this.questions.sort((a, b) => a.order - b.order);
    this.questions.map(el => {
      if (el.controlType == 'date') {
        el.value = (el.value == null) ? new Date() : new Date(el.value);
      }
    })
    this.form = this.qcs.toFormGroup(this.questions);
  }
  cleanForm() {
    this.questions.map(el => {
      if (el.controlType == 'date') {
        el.value = new Date();
      } else {
        el.value = '';
      }
    })
    this.form.reset();
  }

}
