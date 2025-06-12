import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  private _enabled = signal(false);

  @Input() set enabled(val: boolean) {
    this._enabled.set(val);
  }
  get enabled() {
    return this._enabled();
  }

  @Output() enabledChange = new EventEmitter<boolean>();
  @Input() customClass: string | string[] = '';

  toggle() {
    this._enabled.update((val) => {
      const newVal = !val;
      this.enabledChange.emit(newVal);
      return newVal;
    });
  }
}
