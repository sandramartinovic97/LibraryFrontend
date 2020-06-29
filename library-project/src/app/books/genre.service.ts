import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  getAllGenres() {
    return this.httpClient.get<Genre[]>('http://localhost:8083/genre');
  }
}
