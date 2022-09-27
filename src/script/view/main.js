import '../component/hero-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
  const searchElement = document.querySelector('search-bar');
  const heroListElement = document.querySelector('hero-list');
 
  const onButtonSearchClicked = () => {
    DataSource.searchSuperhero(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };
 
  const renderResult = results => {
   heroListElement.superhero = results;
  };
 
  const fallbackResult = message => {
    heroListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

