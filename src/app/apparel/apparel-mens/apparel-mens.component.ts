import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apparel-mens',
  templateUrl: './apparel-mens.component.html',
  styleUrls: ['./apparel-mens.component.scss']
})
export class ApparelMensComponent implements OnInit {
  mens: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getMens()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) { 
            myArray.push(data[key]);
          }
          this.mens = myArray;
        }
    );
  }

}
