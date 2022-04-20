import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input('placeholder') placeholder:string = '';
  @Input('icon') icon: string|null = null;
  @Input('errorMessage') errorMessage:string|null = null;
  @Input('type') type:string = "text";

  private _value:any = "";

  onTouched: any = () => {};
  onChange:any = () => {};

  hasFocus:boolean = false;

  constructor() { 
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  registerOnChange(fn:Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn:Function) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this._value = value;
    this.onChange(value);
  }

}
