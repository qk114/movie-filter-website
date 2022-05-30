import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sub: any
  movies: Movie[] = [];
  // _Activatedroute: any;
  id: any;

  constructor(private movieService: MovieService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {



    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies.slice(1, 5))
  }

}
