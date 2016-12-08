import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowboards',
  templateUrl: './snowboards.component.html',
  styleUrls: ['./snowboards.component.scss']
})

export class SnowboardsComponent implements OnInit {
  clicked: boolean = false;
  playActive: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.clicked = true;
    this.playActive = false;
  }

}
