export class TempDynForm {
    applicationUser: string = '';
    contract_id: number = 0;
    creation_date: number = 0;
    template_form_id: number = 0;
    form_id: number = 0;
    form_name: string = '';
    form_description: string = '';
    template_form_deleted: boolean = false;
    form_deleted: boolean = false;
    form_icon: string = '';
    form_hidden: boolean = false;
    fieldData: [DynField] = [new DynField()];
    // manual
    selected: boolean = false;

}
export class DynField {
    field_id: number = 0;
    template_field_id: number = 0;
    label: string = '';
    value: string = '';
    key: string = '';
    order: number = 0;
    controlType: string = 'textbox';
    type: string = 'text';
    hidden: boolean = false;
    template_field_deleted: boolean = false;
    field_deleted: boolean = false;
    validators: DynFieldValid = new DynFieldValid();
    options: [DynFieldOption] = [new DynFieldOption()];
    // manual
    hideType: boolean = false;
}
export class DynFieldValid {
    template_validators_id: number = 0;
    required: boolean = false;
    minlength: number = 0;
    maxlength: number = 0;
    pattern: string = '';
    accept: string = '';
    email: boolean = false;
    password: boolean = false;
}
export class DynFieldOption {
    value: string = '';
    key: string = '';
}