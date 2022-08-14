import { generateComment } from '../mock/comment.js';

export default class CommentsModel {
  movies = Array.from({length: 10}, generateComment);

  getMovies = () => this.movies;
}
