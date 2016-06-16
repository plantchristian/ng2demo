import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{ 
    title = 'Tour of Heroes';
    selectedHero : Hero;

    heroes: Hero[];


    constructor(private heroService : HeroService, private router : Router) {
         // Content
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        
        // this.heroService.getHeroes().then(function(heroes) { this.heroes = heroes; });
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail () {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}
