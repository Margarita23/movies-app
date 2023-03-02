import {state, style, trigger, animate, transition} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  currentSllideIndex : number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSllideIndex = ++this.currentSllideIndex % this.items.length;
    }, 5000)
  }
}
