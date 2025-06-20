import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label = 'Submit';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() customClass: string | string[] = '';
}
