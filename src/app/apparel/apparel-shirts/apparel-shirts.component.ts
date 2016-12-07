import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-apparel-shirts',
  templateUrl: './apparel-shirts.component.html',
  styleUrls: ['./apparel-shirts.component.scss']
})
export class ApparelShirtsComponent implements OnInit {
  shirts: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getShirts()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) { 
            myArray.push(data[key]);
          }
          this.shirts = myArray;
        }
    );
  }

}
