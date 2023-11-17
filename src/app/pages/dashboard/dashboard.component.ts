import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, debounceTime, distinct, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interface/movies';
import { MovieService } from 'src/app/services/movies.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  movies:Movie[] = [];
  @ViewChild('movieSearchInput', {static: true}) movieSearchInput!: ElementRef;
  movies$!: Observable<Movie[]>

  constructor (private router: Router,
               private movieService: MovieService) {  }

  ngOnInit(): void {
    this.movies$ = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm;
      }),
      filter((searchTerm: string) => searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string) => this.movieService.getMovies(searchTerm))
      )
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  ganancia() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  notificacion() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  analitica() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  users() {
    localStorage.removeItem('token');
    this.router.navigate(['/users']);
  }

  // getMovies(searchTerm: string){
  //   this.movieService.getMovies(searchTerm).subscribe(movies => {
  //     console.log(movies);
  //     this.movies = movies  !== undefined ? movies : [];
  //  })
  // }

}
