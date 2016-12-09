import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-womens',
  templateUrl: './boards-womens.component.html',
  styleUrls: ['./boards-womens.component.scss']
})
export class BoardsWomensComponent implements OnInit {
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
