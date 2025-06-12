import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  @Input() options: string[] = [];
  @Input() customClass: string | string[] = '';
  selected = signal('');

  select(option: string) {
    this.selected.set(option);
  }
}
