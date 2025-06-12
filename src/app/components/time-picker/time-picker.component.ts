import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-picker.component.html',
})
export class TimePickerComponent {
  private _time = signal('');

  @Input() set value(val: string) {
    this._time.set(val);
  }
  get value() {
    return this._time();
  }

  @Output() valueChange = new EventEmitter<string>();
  @Input() customClass: string | string[] = '';

  updateTime(event: Event) {
    const input = event.target as HTMLInputElement;
    const val = input.value;
    this._time.set(val);
    this.valueChange.emit(val);
  }
}
