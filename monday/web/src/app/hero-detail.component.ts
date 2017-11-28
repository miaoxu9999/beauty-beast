import { Component, Input , OnInit} from '@angular/core';

import { Hero } from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(
    private heroSerivce: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.heroSerivce.getHero(+params.get('id'))).subscribe(hero => this.hero = hero);
  }
}

