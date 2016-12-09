import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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