import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-freeride',
  templateUrl: './boards-freeride.component.html',
  styleUrls: ['./boards-freeride.component.scss']
})
export class BoardsFreerideComponent implements OnInit {
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
