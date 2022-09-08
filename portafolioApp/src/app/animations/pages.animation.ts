import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state,
} from '@angular/animations';

export const pageAnimation = trigger('myAnimation', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.1s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.9s', style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
