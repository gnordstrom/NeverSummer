import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apparel-womens',
  templateUrl: './apparel-womens.component.html',
  styleUrls: ['./apparel-womens.component.scss']
})
export class ApparelWomensComponent implements OnInit {
  womens: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getWomens()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) { 
            myArray.push(data[key]);
          }
          this.womens = myArray;
        }
    );
  }
}
