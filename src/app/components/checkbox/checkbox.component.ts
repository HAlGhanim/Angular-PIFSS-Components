import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  private _label = signal('');
  private _checked = signal(false);

  @Input() set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }

  @Input() set checked(val: boolean) {
    this._checked.set(val);
  }
  get checked() {
    return this._checked();
  }

  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() customClass: string | string[] = '';

  toggle() {
    this._checked.update((val) => {
      const newVal = !val;
      this.checkedChange.emit(newVal);
      return newVal;
    });
  }
}
