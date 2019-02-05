import { MomentModule } from 'ngx-moment';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicFormConstructorComponent } from './dynamic-form-constructor/dynamic-form-constructor.component';
import { DynamicFormRenderComponent } from './dynamic-form-render/dynamic-form-render.component';
import { DynamicFormService } from './services/dynamic-form.service';
import { DynamicFormRenderInComponent } from './dynamic-form-render/dynamic-form-render-in/dynamic-form-render-in.component';
import { DynamicFormRenderControlService } from './dynamic-form-render/services/dynamic-form-render-control.service';
import { DynamicFormRenderService } from './dynamic-form-render/services/dynamic-form-render.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
  ],
  declarations: [
    DynamicFormControlComponent,
    DynamicFormConstructorComponent,
    DynamicFormRenderComponent,
    DynamicFormRenderInComponent,
  ],
  exports: [
    DynamicFormControlComponent,
    DynamicFormConstructorComponent,
    DynamicFormRenderComponent,
    DynamicFormRenderInComponent,
  ],
  providers: [
    DynamicFormService,
    DynamicFormRenderControlService,
    DynamicFormRenderService
  ]
})
export class DynamicFormModule { }

