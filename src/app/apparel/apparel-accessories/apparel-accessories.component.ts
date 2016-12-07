import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apparel-accessories',
  templateUrl: './apparel-accessories.component.html',
  styleUrls: ['./apparel-accessories.component.scss']
})
export class ApparelAccessoriesComponent implements OnInit {
  accessories: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAccessories()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) { 
            myArray.push(data[key]);
          }
          this.accessories = myArray;
        }
    );
  }

}
