import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

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

  @Input() customClass: string | string[] = '';
  @Input()
  set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }

  @Input()
  set placeholder(value: string) {
    this._placeholder.set(value);
  }
  get placeholder() {
    return this._placeholder();
  }

  @Input()
  set type(value: 'text' | 'email' | 'password' | 'number') {
    this._type.set(value);
  }
  get type() {
    return this._type();
  }

  value = signal('');

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
  }
}
