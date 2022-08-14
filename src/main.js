import { render } from './render.js';
import MovieNumberView from './view/movie-number-view.js';
import NavigationView from './view/navigation-view.js';
import ContentPresenter from './presenter/board-presenter.js';
import UserView from './view/user-view.js';
import MoviesModel from './model/movies-model.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const footerStatisticElement = document.querySelector('.footer__statistics');

const moviesModel = new MoviesModel();
const contentPresenter = new ContentPresenter();

render(new UserView(), siteHeaderElement);
render(new NavigationView(), siteMainElement);
render(new MovieNumberView(), footerStatisticElement);

contentPresenter.init(siteMainElement, moviesModel);
