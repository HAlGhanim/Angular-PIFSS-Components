import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  private _label = signal('');
  private _placeholder = signal('');
  private _type = signal<'text' | 'email' | 'password' | 'number'>('text');
  private _value = signal('');

  @Input() set label(val: string) {
    this._label.set(val);
  }
  get label() {
    return this._label();
  }

  @Input() set placeholder(val: string) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder();
  }

  @Input() set type(val: 'text' | 'email' | 'password' | 'number') {
    this._type.set(val);
  }
  get type() {
    return this._type();
  }

  @Input() set value(val: string) {
    this._value.set(val);
  }
  get value() {
    return this._value();
  }

  @Output() valueChange = new EventEmitter<string>();
  @Input() customClass: string | string[] = '';

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    const val = input.value;
    this._value.set(val);
    this.valueChange.emit(val);
  }
}
