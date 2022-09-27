import superhero from './superhero.js';


class DataSource {
  static searchSuperhero(keyword) {
    return new Promise((resolve, reject) => {
      const filteredSuperhero = superhero.filter(superhero => superhero.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredSuperhero.length) {
        resolve(filteredSuperhero);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;