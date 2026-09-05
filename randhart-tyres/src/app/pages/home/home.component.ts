import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceTeaser {
  title: string;
  desc: string;
}

interface Review {
  quote: string;
  customer: string;
  service: string;
}

@Component({
  selector: 'rh-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;
  activeIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  readonly perPage = 3;

  get pageCount() { return Math.ceil(this.reviews.length / this.perPage); }

  ngOnInit() { this.startAuto(); }
  ngOnDestroy() { this.stopAuto(); }

  private startAuto() {
    this.timer = setInterval(() => this.slide(1), 4000);
  }

  private stopAuto() {
    if (this.timer) clearInterval(this.timer);
  }

  slide(dir: -1 | 1) {
    const next = (this.activeIndex + dir + this.pageCount) % this.pageCount;
    this.slideTo(next);
  }

  slideTo(index: number) {
    this.activeIndex = index;
    const slider = this.sliderRef.nativeElement;
    slider.scrollTo({ left: slider.clientWidth * index, behavior: 'smooth' });
  }

  onUserInteract(index: number) {
    this.stopAuto();
    this.slideTo(index);
    this.startAuto();
  }

  readonly reviews: Review[] = [
    {
      quote: '“Very professional service. I will be coming back again!”',
      customer: 'Pieter Kriel',
      service: 'Tyre fitment',
    },
    {
      quote: '“The best tyre shop in town!”',
      customer: 'Mlungisi Khoza',
      service: 'Wheel alignment',
    },
    {
      quote: '“Randhart tyres came through for me when I needed them the most!”',
      customer: 'Sipho Nkosi',
      service: 'Puncture repair',
    },
        {
      quote: '“Best prices in town”',
      customer: 'Mlungisi Khoza',
      service: 'Tyre fitment',
    },
        {
      quote: '“Very professional service”',
      customer: 'Kate Dean',
      service: 'Wheel Balancing',
    },
  ];

  readonly services: ServiceTeaser[] = [
    { title: 'Tyre Fitment', desc: 'New and quality used tyres, fitted and balanced while you wait.' },
    { title: 'Wheel Alignment', desc: 'Laser alignment to stop uneven wear and pulling.' },
    { title: 'Wheel Balancing', desc: 'Computerised balancing to smooth out vibration at speed.' },
    { title: 'Puncture Repair', desc: 'Safe, permanent repairs — we tell you honestly when not to patch.' },
  ];
}
