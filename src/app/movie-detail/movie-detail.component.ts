import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  sub: any;
  // _Activatedroute: any;
  id: any;
  filtered_string: string | null = '';
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute, //info about route to this instance of movieDetailComponent
    private movieService: MovieService,//gets hero data from remote server and will use to get movie-to-display
    private location: Location //Interacting with browser.
  ) {
    // this.sub = this.route.paramMap.subscribe(params => {
    //   console.log("Params", params);
    //   // this.id = params.get('id');
    //   console.log("Id: ", this.id);

    // })
    // this.id = this.route.snapshot.paramMap.get("id");

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.movieService.getMovie(this.id as number).subscribe(movie => {
        this.movie = movie;
        console.log(this.movie)
      })


    });

    console.log("Movies Details: ", this.id);

    console.log("Filtered String: ", this.filtered_string);

  }

  ngOnInit(): void {

    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  goBack(): void {
    this.location.back();
  }

  openReleventObject(rel_movie: any) {
    console.log("Relevent Movie Object: ", rel_movie);
  }


}


