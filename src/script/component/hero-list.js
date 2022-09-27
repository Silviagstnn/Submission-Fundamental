import './hero-item.js';
 
class HeroList extends HTMLElement {
  set superhero(superhero) {
    this._superhero = superhero;
    this.render();
  }
 
  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.innerHTML = '';
    this._superhero.forEach(superhero => {
      const heroItemElement = document.createElement('hero-item');
      heroItemElement.superhero = superhero;
      this.appendChild(heroItemElement);
    });
  }
}
 
customElements.define('hero-list', HeroList);