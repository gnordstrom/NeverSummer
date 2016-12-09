import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apparel-hats',
  templateUrl: './apparel-hats.component.html',
  styleUrls: ['./apparel-hats.component.scss']
})
export class ApparelHatsComponent implements OnInit {
  hats: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getHats()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) { 
            myArray.push(data[key]);
          }
          this.hats = myArray;
        }
    );
  }

}
