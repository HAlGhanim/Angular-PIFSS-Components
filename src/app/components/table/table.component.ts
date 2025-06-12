import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() customClass: string | string[] = '';
  @Input() set headers(value: string[]) {
    this._headers.set(value);
  }
  @Input() set rows(value: string[][]) {
    this._rows.set(value);
  }

  private _headers = signal<string[]>([]);
  private _rows = signal<string[][]>([]);

  get headers() {
    return this._headers();
  }
  get rows() {
    return this._rows();
  }
}
