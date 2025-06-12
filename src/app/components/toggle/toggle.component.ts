import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  enabled = signal(false);
  @Input() customClass: string | string[] = '';

  toggle() {
    this.enabled.update((v) => !v);
  }
}
