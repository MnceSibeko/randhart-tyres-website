import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'rh-header',
  host: { '(window:scroll)': 'onScroll()' },
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = signal(false);
  scrolled = signal(false);

  readonly links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    // { path: '/brands', label: 'Tyre Brands' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
