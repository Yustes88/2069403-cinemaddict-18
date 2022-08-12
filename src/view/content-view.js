import { createElement } from '../render.js';


const createFilterTemplate = () => (
  `<section class="films">
  </section>
  `
);

export default class ContentView {
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
