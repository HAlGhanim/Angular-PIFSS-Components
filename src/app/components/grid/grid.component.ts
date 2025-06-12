import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  @Input() customClass: string | string[] = '';
  @Input() set items(value: string[]) {
    this._items.set(value);
  }
  private _items = signal<string[]>([]);
  get items() {
    return this._items();
  }
}
