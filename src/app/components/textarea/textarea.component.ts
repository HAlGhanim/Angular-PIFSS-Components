import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  label = input<string>('');
  placeholder = input<string>('');
  value = input<string>('');
  customClass = input<string | string[]>('');

  valueChange = output<string>();

  updateValue(event: Event) {
    const newVal = (event.target as HTMLTextAreaElement).value;
    this.valueChange.emit(newVal);
  }
}
