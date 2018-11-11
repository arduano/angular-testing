import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-heck',
  templateUrl: './heck.component.html',
  styleUrls: ['./heck.component.css']
})
export class HeckComponent implements OnInit {
  @Input() hecks = 0;
  boxClass = true;
  constructor() { }

  ngOnInit() {
  }

  heck(){
    this.hecks += 1
  }

  toggleBox(){
    this.boxClass = !this.boxClass;
  }
}
