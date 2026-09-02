import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Value {
  title: string;
  desc: string;
}

@Component({
  selector: 'rh-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly values: Value[] = [
    { title: 'Straight talk', desc: 'If a tyre can be repaired instead of replaced, we say so — even though it earns us less.' },
    { title: 'Fast hands', desc: 'Four bays, a full-time team, and a workflow built to get you back on the road quickly.' },
    { title: 'Fair pricing', desc: 'One price list, shown on request. No "regular customer" discount games.' },
    { title: 'Local roots', desc: 'Family-run since we opened, still fixing the same neighbourhood\'s cars.' },
  ];
}
