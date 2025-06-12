import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  private _options = signal<string[]>([]);
  private _selected = signal('');

  @Input() set options(val: string[]) {
    this._options.set(val);
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

  select(val: string) {
    this._selected.set(val);
    this.valueChange.emit(val);
  }
}
