import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component ({
    selector : "app",
    directives : [ROUTER_DIRECTIVES],
    providers : [HeroService, ROUTER_PROVIDERS],
    template : `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})

@RouteConfig([{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
},
{
    path: '/detail',
    name: 'HeroDetail',
    component: HeroDetailComponent
}
])

export class AppComponent {
    title: string = "Don't talk to me about heroes";
}