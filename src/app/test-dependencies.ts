import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/inMemoryData/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroesDetailComponent} from './heroes/heroes-detail/heroes-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';

export const testDeps = {
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterTestingModule,
    RouterTestingModule.withRoutes(
      [{
        path: 'dashboard',
        component: DashboardComponent
      },
        {
          path: 'heroes',
          component: HeroesComponent
        },
        {
          path: 'detail/:id',
          component: HeroesDetailComponent
        }
      ]
    )
  ],
    declarations: [
  HeroesDetailComponent,
  DashboardComponent,
  HeroesComponent,
  HeroSearchComponent

],
  providers: [],
};
