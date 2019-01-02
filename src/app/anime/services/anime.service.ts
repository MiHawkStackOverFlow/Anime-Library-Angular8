import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Anime } from './../model/anime';
import { MessageService } from './../../shared/services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private animesUrl = 'api/animes';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /** GET animes from the server */
  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.animesUrl)
      .pipe(
        tap(_ => this.log('fetched animes')),
        catchError(this.handleError('getAnimes', []))
      );
  }

  /** GET anime by id. Will 404 if id not found */
  getAnime(id: number): Observable<Anime> {
    const url = `${this.animesUrl}/${id}`;
    return this.http.get<Anime>(url).pipe(
      tap(_ => this.log(`fetched anime id=${id}`)),
      catchError(this.handleError<Anime>(`getAnime id=${id}`))
    );
  }

  /* GET Animes whose name contains search term */
   searchAnimes(term: string): Observable<Anime[]> {
    if (!term.trim()) {
      // if not search term, return empty Anime array.
      return of([]);
    }
    return this.http.get<Anime[]>(`${this.animesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found animes matching "${term}"`)),
      catchError(this.handleError<Anime[]>('searchAnimes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new anime to the server */
  addAnime (anime: Anime): Observable<Anime> {
    return this.http.post<Anime>(this.animesUrl, anime, httpOptions).pipe(
      tap((anime: Anime) => this.log(`added Anime w/ id=${anime.id}`)),
      catchError(this.handleError<Anime>('addAnime'))
    );
  }

  /** DELETE: delete the Anime from the server */
  deleteAnime (anime: Anime | number): Observable<Anime> {
    const id = typeof anime === 'number' ? anime : anime.id;
    const url = `${this.animesUrl}/${id}`;

    return this.http.delete<Anime>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted anime id=${id}`)),
      catchError(this.handleError<Anime>('deleteAnime'))
    );
  }

  /** PUT: update the anime on the server */
  updateAnime (anime: Anime): Observable<any> {
    return this.http.put(this.animesUrl, anime, httpOptions).pipe(
      tap(_ => this.log(`updated Anime id=${anime.id}`)),
      catchError(this.handleError<any>('updateAnime'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AnimeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AnimeService: ${message}`);
  }
}
