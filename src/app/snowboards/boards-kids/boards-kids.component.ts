import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-kids',
  templateUrl: './boards-kids.component.html',
  styleUrls: ['./boards-kids.component.scss']
})
export class BoardsKidsComponent implements OnInit {
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
