import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'rh-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  submitted = signal(false);
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\s-]{7,}$/)]],
    email: ['', [Validators.email]],
    reason: ['Tyre fitment', Validators.required],
    message: ['', Validators.required],
  });

  readonly reasons = [
    'Tyre fitment',
    'Wheel alignment',
    'Puncture repair',
    'Fleet account',
    'Something else',
  ];

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Demo only — no backend wired up yet.
    console.log('Contact form submitted', this.form.value);
    this.submitted.set(true);
    this.form.reset({ reason: 'Tyre fitment' });
  }
}
