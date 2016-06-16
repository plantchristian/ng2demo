import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';


@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 2000));
    }

    /**
     * returns a Hero object
     * @param {number} id [description]
     */        
    getHero (id:number) {
        return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
        // return this.getHeroes()
        //     .then(function (heroes) {
        //         heroes.filter(function(hero) {
        //             return hero.id === id;
        //         })[0];
        //     })
    }
}