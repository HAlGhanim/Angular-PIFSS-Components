import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  private _label = signal('');
  private _placeholder = signal('');
  @Input() customClass: string | string[] = '';

  @Input() set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }

  @Input() set placeholder(value: string) {
    this._placeholder.set(value);
  }
  get placeholder() {
    return this._placeholder();
  }

  value = signal('');

  updateValue(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.value.set(textarea.value);
  }
}
