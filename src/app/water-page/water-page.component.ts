import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water-page',
  templateUrl: './water-page.component.html',
  styleUrls: ['./water-page.component.sass']
})
export class WaterPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
