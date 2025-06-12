import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  private _label = signal('');
  private _options = signal<string[]>([]);

  @Input() customClass: string | string[] = '';
  @Input() set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }

  @Input() set options(value: string[]) {
    this._options.set(value);
  }
  get options() {
    return this._options();
  }

  selected = signal('');

  updateSelection(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selected.set(select.value);
  }
}
