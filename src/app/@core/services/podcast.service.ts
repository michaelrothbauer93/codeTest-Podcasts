import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, of, ReplaySubject } from 'rxjs';
import { PodcastGenre } from '@core/models/podcast-genre';
import { catchError } from 'rxjs/operators';
import { Podcast } from '@core/models/podcast';

@Injectable({ providedIn: 'root' })
export class PodcastService
{
  availablePodcasts = new ReplaySubject<Podcast[]>();
  constructor(
    private httpClient: HttpClient,
  ) { }

  getPodcastGenres() : Observable<PodcastGenre[]>
  {
    return this.httpClient
      .get<PodcastGenre[]>("/assets/data/podcasts-by-genre.json")
      .pipe(catchError(this.handleError));
  }

  setAvailablePodcasts(podcasts: Podcast[]) {
    this.availablePodcasts.next(podcasts);
  }

  handleError(error: any, caught: Observable<PodcastGenre[]>) : ObservableInput<any> {
    return of([]);
  }
}
