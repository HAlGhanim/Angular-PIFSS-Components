import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  label = input<string>('');
  options = input<string[]>([]);
  value = input<string>('');
  customClass = input<string | string[]>('');

  valueChange = output<string>();

  updateSelection(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.valueChange.emit(select.value);
  }
}
