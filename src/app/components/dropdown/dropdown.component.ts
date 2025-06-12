import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  private _label = signal('');
  private _options = signal<string[]>([]);
  private _selected = signal('');

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

  @Input() set value(val: string) {
    this._selected.set(val);
  }
  get value() {
    return this._selected();
  }

  @Output() valueChange = new EventEmitter<string>();
  @Input() customClass: string | string[] = '';

  updateSelection(event: Event) {
    const select = event.target as HTMLSelectElement;
    this._selected.set(select.value);
    this.valueChange.emit(select.value);
  }
}
