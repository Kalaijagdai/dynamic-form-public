export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: any;
  validators: ValidatorsModel;
  passwords: QuestionBase<T>;
  hidden: boolean;
  options;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    type?: any,
    validators?: ValidatorsModel,
    hidden?: boolean,
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.hidden = !!options.hidden;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type;
    this.validators.minlength = options.validators.minlength || 6;
    this.validators.required = options.validators.required || false;
  }
}
export class ValidatorsModel{
  minlength: number;
  required: boolean;
  email: boolean;
  pattern: string;
  password: boolean;
}
export class PasswordMOdel {
  password: string;
  confirm_password: string;
}
