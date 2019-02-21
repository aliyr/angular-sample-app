import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  Heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.Heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
  public add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.heroService.addHero({name} as Hero).subscribe(hero => this.Heroes.push(hero));
  }

  public delete(hero: Hero): void {
    this.Heroes = this.Heroes.filter(h => h !== hero);
    this.heroService.removeHero(hero).subscribe();
  }

}
