import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsModel } from '../models';
import { matchOtherValidator } from './repeatpassword.funcion';

@Injectable()
export class DynamicFormRenderControlService {
  constructor() { }
  passwords: FormGroup
  toFormGroup(questions: any[]) {
    if (questions) {
      let groupAny = {};
      questions.forEach(question => {
        groupAny[question.key] = new FormControl(question.value, this.validspush(question.validators));
      });
      return new FormGroup(groupAny);
    }
  }
  validspush(validators: ValidatorsModel) {
    const valids = [Validators.minLength(validators.minlength)];
    if (validators.required) {
      valids.push(Validators.required);
      if (validators.email) {
        valids.push(Validators.email);
      }
      if (validators.pattern) {
        valids.push(Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'));
      }
      if (validators.password) {
        valids.push(matchOtherValidator('password'));
      }
      return valids;
    } else {
      return valids;
    }

  }
}
