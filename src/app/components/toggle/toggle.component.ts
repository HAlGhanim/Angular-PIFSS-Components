import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  enabled = input<boolean>(false);
  customClass = input<string | string[]>('');

  enabledChange = output<boolean>();

  toggle() {
    this.enabledChange.emit(!this.enabled());
  }
}
