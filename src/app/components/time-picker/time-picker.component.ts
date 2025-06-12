import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-picker.component.html',
})
export class TimePickerComponent {
  time = signal('');
  @Input() customClass: string | string[] = '';

  updateTime(event: Event) {
    const input = event.target as HTMLInputElement;
    this.time.set(input.value);
  }
}
