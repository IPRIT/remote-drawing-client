import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return opacity();
}

export function opacity() {
  return trigger('routerTransition', [
    state('void', style({ position: 'absolute', width: '100vw' }) ),
    state('*', style({ position: 'absolute', width: '100vw' }) ),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.5s .1s ease-in-out', style({ opacity: 1 }))
    ]),
  ]);
}