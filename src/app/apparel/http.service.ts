import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class HttpService {

  constructor(private http: Http) { }

  getShirts() {
    return this.http.get('http://localhost:8080/apparel/items/shirts')
      .map(res => res.json());
  }
  getHoodies() {
    return this.http.get('http://localhost:8080/apparel/items/hoodies')
      .map(res => res.json());
  }
  getHats() {
    return this.http.get('http://localhost:8080/apparel/items/hats')
      .map(res => res.json());
  }
  getAccessories() {
    return this.http.get('http://localhost:8080/apparel/items/accessories')
      .map(res => res.json());
  }

//   getWomens() {
//     return this.http.get('https://spacex-d2f2d.firebaseio.com/womens.json')
//       .map(res => res.json());
//   }
//   getKids() {
//     return this.http.get('https://spacex-d2f2d.firebaseio.com/kids.json')
//       .map(res => res.json());
//   }
//   getAccessories() {
//     return this.http.get('https://spacex-d2f2d.firebaseio.com/accessories.json')
//       .map(res => res.json());
//   }

}
