import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent {
  date = signal('');
  @Input() customClass: string | string[] = '';

  updateDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.date.set(input.value);
  }
}
