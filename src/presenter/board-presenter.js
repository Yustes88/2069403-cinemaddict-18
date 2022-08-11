import { render } from '../render.js';
import MovieCardView from '../view/movie-card-view.js';
import MoviesListView from '../view/movie-list-view.js';
import ContentView from '../view/content-board-view.js';
import MoviesListWrapperView from '../view/movie-list-wrapper-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import MovieExtraWrapperView from '../view/movie-extra-wrapper-view.js';
import MoviesListExtraView from '../view/movie-list-view.js';
import MovieExtraCardView from '../view/movie-extra-card-view.js';

export default class ContentPresenter {
  contentComponent = new ContentView();
  movieListWrapperComponent = new MoviesListWrapperView();
  moviesListComponent = new MoviesListView();
  movieExtraWrapper = new MovieExtraWrapperView();
  movieListExtraComponent = new MoviesListExtraView();

  init = (mainContainer) => {
    render(this.contentComponent, mainContainer);
    render(this.movieListWrapperComponent, this.contentComponent.getElement());
    render(this.moviesListComponent, this.movieListWrapperComponent.getElement());
    for(let i = 0; i < 5; i++) {
      render(new MovieCardView(), this.moviesListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.movieListWrapperComponent.getElement());

    render(this.movieExtraWrapper, this.contentComponent.getElement());
    render(this.movieListExtraComponent, this.movieExtraWrapper.getElement());
    for(let i = 0; i < 2; i++) {
      render(new MovieExtraCardView(), this.movieListExtraComponent.getElement());
    }

  };


}
