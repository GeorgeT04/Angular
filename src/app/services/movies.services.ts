import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interface/apiResponse';
import { Movie } from '../interface/movies';

@Injectable({
    providedIn: 'root'
  })
  export class MovieService {
  
    private API_URL: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=7f47e08b&s';

    constructor(private http: HttpClient) { }

    getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;
      })
    );
    }   
  }