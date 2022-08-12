import { render } from '../render.js';
import MovieCardView from '../view/movie-card-view.js';
import MovieListView from '../view/movie-list-view.js';
import ContentView from '../view/content-view.js';
import MovieListWrapperExtraView from '../view/movie-list-wrapper-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import MovieExtraWrapperView from '../view/movie-list-wrapper-extra-view.js';
import MovieListExtraView from '../view/movie-list-view.js';
import MovieCardExtraView from '../view/movie-card-extra-view.js';
import FilterView from '../view/filter-view.js';

const MOVIE_CARD_NUMBER = 5;
const MOVIE_CARD_EXTRA_NUMBER = 2;

export default class ContentPresenter {
  contentComponent = new ContentView();
  filterComponent = new FilterView();
  movieListWrapperComponent = new MovieListWrapperExtraView();
  moviesListComponent = new MovieListView();
  movieExtraWrapperComponent = new MovieExtraWrapperView();
  movieListExtraComponent = new MovieListExtraView();

  init = (mainContainer) => {
    render(this.contentComponent, mainContainer);
    render(this.filterComponent, this.contentComponent.getElement());
    render(this.movieListWrapperComponent, this.contentComponent.getElement());
    render(this.moviesListComponent, this.movieListWrapperComponent.getElement());
    for(let i = 0; i < MOVIE_CARD_NUMBER; i++) {
      render(new MovieCardView(), this.moviesListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.movieListWrapperComponent.getElement());

    render(this.movieExtraWrapperComponent, this.contentComponent.getElement());
    render(this.movieListExtraComponent, this.movieExtraWrapperComponent.getElement());
    for(let i = 0; i < MOVIE_CARD_EXTRA_NUMBER; i++) {
      render(new MovieCardExtraView(), this.movieListExtraComponent.getElement());
    }
  };


}
