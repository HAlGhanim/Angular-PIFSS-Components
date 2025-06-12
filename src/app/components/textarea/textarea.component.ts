import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  private _label = signal('');
  private _placeholder = signal('');
  private _value = signal('');

  @Input() set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }

  @Input() set placeholder(value: string) {
    this._placeholder.set(value);
  }
  get placeholder() {
    return this._placeholder();
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
    const newVal = (event.target as HTMLTextAreaElement).value;
    this._value.set(newVal);
    this.valueChange.emit(newVal);
  }
}
