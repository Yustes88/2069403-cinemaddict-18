import { render } from '../render.js';
import MovieCardView from '../view/movie-card-view.js';
import MovieListView from '../view/movie-list-view.js';
import ContentView from '../view/content-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilterView from '../view/filter-view.js';
import MovieListWrapperView from '../view/movie-list-wrapper-view.js';


export default class ContentPresenter {
  contentComponent = new ContentView();
  filterComponent = new FilterView();
  movieListWrapperComponent = new MovieListWrapperView();
  moviesListComponent = new MovieListView();

  init = (mainContainer, moviesModel) => {
    this.moviesModel = moviesModel;
    this.contentMovies = [...this.moviesModel.getMovies()];

    render(this.contentComponent, mainContainer);
    render(this.filterComponent, this.contentComponent.getElement());
    render(this.movieListWrapperComponent, this.contentComponent.getElement());
    render(this.moviesListComponent, this.movieListWrapperComponent.getElement());

    for(let i = 0; i < this.contentMovies.length; i++) {
      render(new MovieCardView(this.contentMovies[i]), this.moviesListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.movieListWrapperComponent.getElement());

  };

}
