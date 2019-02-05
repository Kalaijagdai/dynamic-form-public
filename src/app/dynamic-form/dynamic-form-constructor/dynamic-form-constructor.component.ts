import { Component, OnInit } from '@angular/core';
import { TempDynForm, DynField, DynFieldOption } from './dynamic-from-constructor.model';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { tempData } from './data';

@Component({
  selector: 'app-dynamic-form-constructor',
  templateUrl: './dynamic-form-constructor.component.html',
  styleUrls: ['./dynamic-form-constructor.component.scss']
})
export class DynamicFormConstructorComponent implements OnInit {
  isLeftVisible: boolean = false;
  isAddForm: boolean = true;
  templateShow: boolean = false;
  dynFormData: any[] = tempData;
  dynForm: FormGroup;
  Controls = [
    { key: 'textbox', value: 'Input' },
    { key: 'dropdown', value: 'Select' },
    // { key: 'color', value: 'Color' },
    { key: 'date', value: 'Date' },
    { key: 'telephone', value: 'Telephone' },
    { key: 'textarea', value: 'Textarea' },
  ];
  Types = [
    { key: 'text', value: 'text' },
    // { key: 'file', value: 'file' },
    { key: 'number', value: 'number' },
    { key: 'password', value: 'password' },
    { key: 'email', value: 'email' },
    { key: 'checkbox', value: 'checkbox' },
    // { key: 'radio', value: 'radio' },
  ]
  constructor() { }
  ngOnInit() {
    this.loadTemplateDynamicForm();
    this.formationDynForm();
  }

  formationDynForm() {
    this.dynForm = new FormGroup({
      form_name: new FormControl('', Validators.required),
      form_description: new FormControl(''),
      form_icon: new FormControl(''),
      form_hidden: new FormControl(false),
      fieldData: new FormArray([this.initField(new DynField)]),
      //hide value
      template_form_deleted: new FormControl(false),
      template_form_id: new FormControl(0)
    })
    //fix options
    const control = <FormArray>this.dynForm.controls.fieldData['controls'][0]['controls']['options'];
    control.push(this.initOption(new DynFieldOption));
  }

  initField(fieldData: DynField) {
    return new FormGroup({
      label: new FormControl(fieldData.label, [Validators.required, Validators.minLength(3)]),
      key: new FormControl(fieldData.key, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9_]*$")]),
      order: new FormControl(fieldData.order, [Validators.required, Validators.pattern("^[0-9]*$")]),
      controlType: new FormControl(fieldData.controlType, Validators.required),
      type: new FormControl(fieldData.type),
      hidden: new FormControl(fieldData.hidden),
      template_field_id: new FormControl(fieldData.template_field_id),
      options: new FormArray([]),
      validators: new FormGroup({
        required: new FormControl(fieldData.validators.required),
        minlength: new FormControl(fieldData.validators.minlength, Validators.pattern("^[0-9]*$")),
        maxlength: new FormControl(fieldData.validators.maxlength, Validators.pattern("^[0-9]*$")),
        pattern: new FormControl(fieldData.validators.pattern),
        accept: new FormControl(fieldData.validators.accept),
        email: new FormControl(fieldData.validators.email),
        password: new FormControl(fieldData.validators.password),
        //hide value
        template_validators_id: new FormControl(fieldData.validators.template_validators_id),
      }),
      //hide value
      hideType: new FormControl(true)
    });
  }
  // this.customValidator.bind(this)
  customValidator(control: FormControl) {
    console.log('customValidator', control);
    // let myArray = this.dynForm.controls.fieldData['controls'];
    // let test = myArray.filter(data => data.controls.key.value == control.value && control.value != null)
    // if (test.length > 1) {
    //   return control;
    // } else {
    //   return null;
    // }
    return null;
  }
  findDuplicate(value): boolean {
    let myArray = this.dynForm.controls.fieldData['controls'];
    let test = myArray.filter(data => data.controls.key.value == value.name && value.name != null)
    if (test.length > 1) {
      return true;
    } else {
      return false;
    }
  }
  initOption(option) {
    return new FormGroup({
      template_options_id: new FormControl(option.template_options_id),
      key: new FormControl(option.key),
      value: new FormControl(option.value)
    });
  }
  addDynForm() {
    this.formationDynForm()
    this.dynFormData.forEach(el => el.selected = false);
    this.isAddForm = true;
    this.isLeftVisible = false;
  }
  deleteDynForm() {
    this.dynFormData.splice(this.tabIndex, 1);
    this.addDynForm();
  }

  addField() {
    const control = <FormArray>this.dynForm.controls['fieldData'];
    control.push(this.initField(new DynField));
  }
  deleteField(i: number) {
    const control = <FormArray>this.dynForm.controls['fieldData'];
    control.removeAt(i);
  }

  addOption(index: number) {
    const control = <FormArray>this.dynForm.controls.fieldData['controls'][index]['controls']['options'];
    control.push(this.initOption(new DynFieldOption));
  }
  deleteOption(index, indexOption: number) {
    const control = <FormArray>this.dynForm.controls.fieldData['controls'][index]['controls']['options'];
    control.removeAt(indexOption);
  }

  loadTemplateDynamicForm() {
    this.dynFormData = (this.dynFormData.length == 0) ? [new TempDynForm()] : this.dynFormData;
    this.dynFormData.forEach(el => el.selected = false);
    this.addDynForm();
  }

  saveForm() {
    this.dynFormData.push(this.dynForm.value);
    this.addDynForm();
  }

  tabIndex;
  checkTab(index: number) {
    this.tabIndex = index;
    this.formationDynForm();
    this.dynFormData.forEach((el, dynIndex) => el.selected = (dynIndex === index));
    this.getDynFormValue(this.dynFormData[index]);
    this.isAddForm = false;
    this.isLeftVisible = false;
  }
  getDynFormValue(dynFormData: TempDynForm) {
    this.dynForm.controls['form_name'].setValue(dynFormData.form_name);
    this.dynForm.controls['form_description'].setValue(dynFormData.form_description);
    this.dynForm.controls['template_form_deleted'].setValue(dynFormData.template_form_deleted);
    this.dynForm.controls['template_form_id'].setValue(dynFormData.template_form_id);
    this.dynForm.controls['form_hidden'].setValue(dynFormData.form_hidden);
    this.dynForm.controls['form_icon'].setValue(dynFormData.form_icon);
    const control = <FormArray>this.dynForm.controls['fieldData'];
    control.removeAt(0);
    dynFormData.fieldData.forEach((el, index) => {
      control.push(this.initField(el))
      this.dynForm.controls.fieldData['controls'][index]['controls']['options'].removeAt(0);
      el.options.forEach(el2 => {
        this.dynForm.controls.fieldData['controls'][index]['controls']['options'].push(this.initOption(el2))
      })
    })
  }
  getHiddenControl(field, field_key, hide_key, control_key) {
    if (field.controls[field_key].value === control_key) {
      field.controls[hide_key].setValue(false);
    } else {
      field.controls[hide_key].setValue(true)
    }
    return field.controls[hide_key].value
  }
  questions: DynField[];
  buttonNext() {
    this.isLeftVisible = true;
    this.questions = this.dynForm.value.fieldData
  }
}
