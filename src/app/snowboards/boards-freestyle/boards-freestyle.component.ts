import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-freestyle',
  templateUrl: './boards-freestyle.component.html',
  styleUrls: ['./boards-freestyle.component.scss']
})
export class BoardsFreestyleComponent implements OnInit {
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
