import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceTeaser {
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'rh-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly stats: Stat[] = [
    { value: '18', label: 'Years on Voortrekker Road' },
    { value: '30-min', label: 'Average fitment time' },
    { value: '4', label: 'Bays running daily' },
    { value: '12-mo', label: 'Alignment workmanship guarantee' },
  ];

  readonly services: ServiceTeaser[] = [
    { title: 'Tyre Fitment', desc: 'New and quality used tyres, fitted and balanced while you wait.' },
    { title: 'Wheel Alignment', desc: 'Laser alignment to stop uneven wear and pulling.' },
    { title: 'Wheel Balancing', desc: 'Computerised balancing to smooth out vibration at speed.' },
    { title: 'Puncture Repair', desc: 'Safe, permanent repairs — we tell you honestly when not to patch.' },
  ];
}
