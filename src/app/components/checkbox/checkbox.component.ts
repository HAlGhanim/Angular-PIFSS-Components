import { CommonModule } from '@angular/common';
import { Component, input, output, signal, computed } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  label = input<string>('');
  checked = input<boolean>(false);
  customClass = input<string | string[]>('');
  checkedChange = output<boolean>();
  currentChecked = computed(() => this.checked() ?? this.internalChecked());
  private internalChecked = signal(false);

  toggle() {
    const newValue = !this.currentChecked();
    this.internalChecked.set(newValue);
    this.checkedChange.emit(newValue);
  }
}
