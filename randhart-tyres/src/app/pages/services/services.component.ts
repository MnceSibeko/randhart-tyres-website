import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  num: string;
  title: string;
  desc: string;
  points: string[];
}

@Component({
  selector: 'rh-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      num: '01',
      title: 'Tyre Sales & Fitment',
      desc: 'New and carefully graded used tyres for cars, bakkies and SUVs, fitted on-site.',
      points: ['Free tread and pressure check', 'Same-day fitment in most cases', 'Trade-in on your old set'],
    },
    {
      num: '02',
      title: 'Wheel Alignment',
      desc: 'Laser-guided alignment to correct camber, caster and toe, stopping uneven wear before it starts.',
      points: ['Before-and-after printout', 'Corrects pulling and vibration', '12-month workmanship guarantee'],
    },
    {
      num: '03',
      title: 'Wheel Balancing',
      desc: 'Computerised balancing on every wheel we touch, so there is no shimmy at highway speed.',
      points: ['Included with every new tyre fitment', 'Diagnoses steering-wheel wobble', 'Weights matched to rim type'],
    },
    {
      num: '04',
      title: 'Puncture Repair',
      desc: 'Proper plug-and-patch repairs from the inside — and an honest no when a tyre is beyond saving.',
      points: ['Full internal inspection', 'Nail and sidewall damage assessed', 'While-you-wait turnaround'],
    },
    {
      num: '05',
      title: 'Valve & TPMS Service',
      desc: 'Replacement valves and tyre-pressure sensor checks whenever a wheel comes off.',
      points: ['New valve with every fitment', 'TPMS sensor reset and testing', 'Slow-leak diagnosis'],
    },
    {
      num: '06',
      title: 'Fleet & Business Accounts',
      desc: 'Scheduled tyre management for delivery fleets and company vehicles, billed monthly.',
      points: ['Priority bay booking', 'Consolidated monthly invoicing', 'On-site callout for larger fleets'],
    },
  ];
}
