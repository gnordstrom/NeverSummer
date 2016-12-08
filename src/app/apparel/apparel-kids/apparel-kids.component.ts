import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apparel-kids',
  templateUrl: './apparel-kids.component.html',
  styleUrls: ['./apparel-kids.component.scss']
})
export class ApparelKidsComponent implements OnInit {
  kids: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getKids()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) { 
            myArray.push(data[key]);
          }
          this.kids = myArray;
        }
    );
  }
}
