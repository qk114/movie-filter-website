import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

import { MOVIES } from '../mock-movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  title = 'mouse-hover';
  showSummary: boolean;
  selectedMovie?: Movie;

  movies: Movie[] = [];
  count: number = 0;

  // movies: any = MOVIES

  constructor(private movieService: MovieService, private route: Router) {

    this.showSummary = false;
  }
  ngOnInit(): void {


    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies
        console.log("Length: ", this.movies.length);
        localStorage.setItem("Objects_Count", (this.movies.length.toString()))
      });
  }
  // getMovie(name: string){
  //   this.movieService.getMovie()
  // }

  showSunmary(hover: boolean) {
    this.showSummary = hover;
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  // MovieObject(movie: any) {
  //   console.log("Movie Object: ", movie)
  //   this.route.navigate(['/detail', movie])

  // }


}
