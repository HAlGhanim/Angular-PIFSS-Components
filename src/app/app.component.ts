import { Component } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  DatePickerComponent,
  DropdownComponent,
  GridComponent,
  InputComponent,
  NavbarComponent,
  RadioComponent,
  TableComponent,
  TextareaComponent,
  TimePickerComponent,
  ToggleComponent,
} from '../app/components';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputComponent,
    TextareaComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ButtonComponent,
    NavbarComponent,
    DatePickerComponent,
    TimePickerComponent,
    TableComponent,
    ToggleComponent,
    GridComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pifss-angular-components';

  name = '';
  email = '';
  comment = '';
  selectedOption = '';
  selectedRadio = '';

  acceptedTerms = false;
  toggleEnabled = false;

  dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  radioOptions = ['Male', 'Female'];

  tableHeaders = ['Name', 'Age', 'Role'];
  tableRows = [
    ['Alice', '30', 'Developer'],
    ['Bob', '25', 'Designer'],
    ['Charlie', '35', 'Manager'],
  ];

  gridItems = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];
}
