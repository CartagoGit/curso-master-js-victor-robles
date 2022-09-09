import { Component, OnInit } from '@angular/core';
import { query, style, group, animate, trigger, transition } from "@angular/animations";
import { ActivatedRoute } from "@angular/router"

const top = [
  query(
    ':leave, :enter',
    style({position: "fixed", width:"60%"}),
    { optional: false }
  ),
  group([
    query(
      ':enter',
      [
        style({
          transform: 'translateY(-100%)',
          opacity: "0"
        }),
        animate(
          '.4s ease-out',
          style({
            transform: 'translateY(0%)',
            opacity: "1"
          })
        )
      ],
      { optional: false, }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'translateY(0%)',
          opacity: "1",

        }),
        animate(
          '.4s ease-out',
          style({
            transform: 'translateY(100%)',
            opacity: "0",
          })
        )
      ],
      { optional: false, }
    ),
    query(
      '#footer',
      [
        style({
          opacity: "0"
        }),
        animate(
          '.4s ease-out',
          style({
            opacity: "0",
          })
        )
      ],
      { optional: false, }
    ),
  ]),
];

const bottom = [
  query(
    ':leave, :enter',
    style({position: "fixed", width:"60%"}),
    { optional: false }
  ),
  group([
    query(
      ':enter',
      [
        style({
          transform: 'translateY(100%)',
          opacity: "0"
        }),
        animate(
          '.4s ease-out',
          style({
            transform: 'translateY(0%)',
            opacity: "1"
          })
        )
      ],
      { optional: false, }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'translateY(0%)',
          opacity: "1"
        }),
        animate(
          '.4s ease-out',
          style({
            transform: 'translateY(-100%)',
            opacity: "0",
          })
        )
      ],
      { optional: false, }
    ),
    query(
      '#footer',
      [
        style({
          opacity: "0"
        }),
        animate(
          '.4s ease-out',
          style({
            opacity: "0",
          })
        )
      ],
      { optional: false, }
    ),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', bottom),
      transition(':decrement', top),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'proyecto-angular';
  constructor(private route: ActivatedRoute) { }
  animationState: number;

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }

  ngOnInit() { }

}




