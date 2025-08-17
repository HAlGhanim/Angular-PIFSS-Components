import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  label = input<string>('Submit');
  type = input<'button' | 'submit'>('button');
  customClass = input<string | string[]>('');
}
