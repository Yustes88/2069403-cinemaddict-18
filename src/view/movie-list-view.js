import { createElement } from '../render.js';


const createFilterTemplate = () => (
  `<div class="films-list__container">
  </div>
  `
);

export default class MovieListView {
  getTemplate() {
    return createFilterTemplate();
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
