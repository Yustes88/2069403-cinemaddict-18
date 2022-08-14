import { generateMovie } from '../mock/movie.js';

export default class MoviesModel {
  movies = Array.from({length: 2}, generateMovie);

  getMovies = () => this.movies;
}
