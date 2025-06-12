import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent {
  private _date = signal('');

  @Input() set value(val: string) {
    this._date.set(val);
  }
  get value() {
    return this._date();
  }

  @Output() valueChange = new EventEmitter<string>();
  @Input() customClass: string | string[] = '';

  updateDate(event: Event) {
    const input = event.target as HTMLInputElement;
    const val = input.value;
    this._date.set(val);
    this.valueChange.emit(val);
  }
}
