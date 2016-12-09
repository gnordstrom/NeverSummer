import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuclicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  menuClick() {
    this.menuclicked = true;
  }
  menuClose() {
    this.menuclicked = false;
  }
}
