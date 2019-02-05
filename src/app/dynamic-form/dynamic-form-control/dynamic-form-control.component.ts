
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DynamicFormRenderComponent } from '../dynamic-form-render/dynamic-form-render.component';
import { readyFormData } from './data';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent implements OnInit {
  @ViewChild('dynamicformrender') dynamicformrender: DynamicFormRenderComponent;
  @Input() customId;
  @Input() id;
  @Input() tempForm;
  readyForms: any[] = readyFormData;

  ngOnInit() {
    this.loadReadyForm(this.tempForm.template_form_id);
  }
  loadReadyForm(template_form_id) {
    this.readyForms.sort((a, b) => b.creation_date - a.creation_date);
  }
  createReadyForm() {
    this.readyForms
  }
  editReadyForm() {
    this.readyForms
  }
  deleteReadyForm(tempForm) {
    this.readyForms
  }
}