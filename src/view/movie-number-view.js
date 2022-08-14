import { createElement } from '../render.js';


const createMovieNumberTemplate = () => (
  `<p>130 291 movies inside</p>
  `
);

export default class MovieNumberView {
  getTemplate() {
    return createMovieNumberTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

