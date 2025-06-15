import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PifssLogoComponent } from '../icons/pifss-logo/pifss-logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, PifssLogoComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() customClass: string | string[] = '';

  // Change this based on your project
  links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'الرئيسية', path: '/home-ar' },
  ];

  trackByLabel(index: number, item: { label: string }) {
    return item.label;
  }
}
