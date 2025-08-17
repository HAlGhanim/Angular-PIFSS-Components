import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  customClass = input<string | string[]>('');
  headers = input<string[]>([]);
  rows = input<string[][]>([]);
}
