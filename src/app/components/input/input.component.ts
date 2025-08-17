import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'email' | 'password' | 'number'>('text');
  value = input<string>('');
  customClass = input<string | string[]>('');

  valueChange = output<string>();

  updateValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const val = inputElement.value;
    this.valueChange.emit(val);
  }
}
