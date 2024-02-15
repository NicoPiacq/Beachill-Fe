import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInLater', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(5000, style({
          opacity: 1
        }))
      ])
    ]),

  ]
})
export class HomeComponent {

}
