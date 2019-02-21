import { Injectable } from '@angular/core';
import {Hero} from '../../models/hero';
import { Observable, of } from 'rxjs';
import {MessageService} from '../message/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // properties ===
  private heroesUrl = 'api/heroes';

  // methods ===
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('heroes fetched')),
      catchError(this.handleError('get Heroes', []))
    );
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`HeroService: fetched hero id=${id}`),
      catchError(this.handleError<Hero>(`get Hero ${id}`)))
    );
  }
  updateHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.heroesUrl , hero , httpOptions).pipe(
      tap(_ => this.log(`hero ${hero.id} updated`)),
      catchError(this.handleError<Hero>(`update hero ${hero.name} failed`))
    );
  }
  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Hero>(this.heroesUrl , hero , httpOptions).pipe(
      tap((newHero: Hero) => this.log(`new hero ${newHero.name} added`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  removeHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete<Hero>(url , httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('deleted Hero'))
    );
  }
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found some matching of ${term}`)),
      catchError(this.handleError<Hero[]>(`search heroes`))
    );
  }
  log (message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error} `);
      return of(result as T);
    };
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
}
