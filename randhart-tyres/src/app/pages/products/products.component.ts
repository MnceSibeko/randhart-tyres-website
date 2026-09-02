import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Tier {
  name: string;
  tag: string;
  desc: string;
  brands: string[];
}

@Component({
  selector: 'rh-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly tiers: Tier[] = [
    {
      name: 'Premium',
      tag: 'Longest warranty',
      desc: 'For daily drivers who want the longest tread life and the quietest ride, backed by full manufacturer warranty.',
      brands: ['Michelin', 'Bridgestone', 'Continental', 'Goodyear'],
    },
    {
      name: 'Mid-Range',
      tag: 'Best all-round value',
      desc: 'Strong performance and safety ratings at a lower cost — what we fit on our own vehicles.',
      brands: ['Falken', 'Hankook', 'Kumho', 'Yokohama'],
    },
    {
      name: 'Budget',
      tag: 'Value-focused',
      desc: 'Solid, tested budget tyres for cars going in for resale or drivers on a tighter month.',
      brands: ['Achilles', 'Linglong', 'Wanli', 'Aplus'],
    },
    {
      name: 'Quality Used',
      tag: 'Inspected & graded',
      desc: 'Part-worn tyres pulled, tread-checked and pressure-tested before they go back on a car.',
      brands: ['Graded 6mm+', 'Graded 4–6mm', 'Sidewall-inspected', 'No repairs re-sold'],
    },
  ];
}
