import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  customClass = input<string | string[]>('');
  items = input<string[]>([]);
}
