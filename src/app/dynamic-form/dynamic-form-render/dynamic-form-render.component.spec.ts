import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRenderComponent } from './dynamic-form-render.component';

describe('DynamicFormRenderComponent', () => {
  let component: DynamicFormRenderComponent;
  let fixture: ComponentFixture<DynamicFormRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
