import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  private _label = signal('');
  @Input() customClass: string | string[] = '';
  @Input() set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }

  checked = signal(false);

  toggle() {
    this.checked.update((value) => !value);
  }
}
