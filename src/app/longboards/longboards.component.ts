import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longboards',
  templateUrl: './longboards.component.html',
  styleUrls: ['./longboards.component.scss']
})
export class LongboardsComponent implements OnInit {
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
