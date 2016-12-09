import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apparel-hoodies',
  templateUrl: './apparel-hoodies.component.html',
  styleUrls: ['./apparel-hoodies.component.scss']
})
export class ApparelHoodiesComponent implements OnInit {
  hoodies: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getHoodies()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.hoodies = myArray;
        }
    );
    
  }

}
