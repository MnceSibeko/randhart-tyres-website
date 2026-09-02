import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Randhart Tyres — Tyres, Fitment & Wheel Alignment',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services — Randhart Tyres',
  },
  {
    path: 'brands',
    loadComponent: () =>
      import('./pages/products/products.component').then((m) => m.ProductsComponent),
    title: 'Tyre Brands — Randhart Tyres',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us — Randhart Tyres',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us — Randhart Tyres',
  },
  { path: '**', redirectTo: '' },
];
