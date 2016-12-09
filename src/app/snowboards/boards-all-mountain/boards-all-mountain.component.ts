import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-all-mountain',
  templateUrl: './boards-all-mountain.component.html',
  styleUrls: ['./boards-all-mountain.component.scss']
})
export class BoardsAllMountainComponent implements OnInit {
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
