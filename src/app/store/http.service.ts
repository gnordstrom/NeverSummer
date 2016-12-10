import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class HttpService {

  constructor(private http: Http) { }

  getShirts() {
    return this.http.get('http://neversummer.us/apparel/items/shirts')
      .map(res => res.json());
  }
  getHoodies() {
    return this.http.get('http://neversummer.us/apparel/items/hoodies')
      .map(res => res.json());
  }
  getHats() {
    return this.http.get('http://neversummer.us/apparel/items/hats')
      .map(res => res.json());
  }
  getAccessories() {
    return this.http.get('http://neversummer.us/apparel/items/accessories')
      .map(res => res.json());
  }
  getMens() {
    return this.http.get('http://neversummer.us/apparel/items/mens')
      .map(res => res.json());
  }
  getWomens() {
    return this.http.get('http://neversummer.us/apparel/items/womens')
      .map(res => res.json());
  }
  getKids() {
    return this.http.get('http://neversummer.us/apparel/items/kids')
      .map(res => res.json());
  }
}
