import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  options = input<string[]>([]);
  value = input<string>('');
  customClass = input<string | string[]>('');

  valueChange = output<string>();

  select(val: string) {
    this.valueChange.emit(val);
  }
}
