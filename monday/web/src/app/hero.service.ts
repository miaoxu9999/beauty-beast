// import { Injectable} from '@angular/core';
// import { Hero} from './hero';
// import {HEROES} from './mock-heroes';
// import {promise} from 'selenium-webdriver';
//
// @Injectable()
// export  class  HeroService {
// getHeroes(): Promise<Hero[]> {
//   return Promise.resolve(HEROES);
//   }
//   getHero(id: number): Promise<Hero> {
//     return this.getHeroes()
//       .then(u => u.find(a => a.id === id));
//     // heroes => heroes.find(hero => hero.id === id)
//   }
// }
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
