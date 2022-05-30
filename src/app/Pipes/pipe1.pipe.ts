import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'pipe1',
  pure: true
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: Movie[], movie: Movie) {
    if (value.length === 0 || movie === undefined) {
      return value;
    }
    let object_value = (Number)(localStorage.getItem("Objects_Count"));
    console.log("Object Counts: ", object_value);

    let filteredMovies = value.filter(m => m.popularity < movie.popularity + object_value && m.popularity > movie.popularity - object_value);
    return filteredMovies.slice(0, 10);
  }

}
