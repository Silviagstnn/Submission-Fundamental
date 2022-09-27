class HeroItem extends HTMLElement {
    set hero(hero) {
      this._hero = hero;
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <img class="fan-art-hero" src="${this._hero.fanArt}" alt="Fan Art">
        <div class="hero-info">
          <h2>${this._hero.name}</h2>
          <p>${this._hero.description}</p>
        </div>
      `;
    }
  }
   
  customElements.define('hero-item',HeroItem);