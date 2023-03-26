
const axios = require("axios");

function Home() {
  const options = {
    method: 'GET',
    url: 'https://imdb-api.com/en/API/SearchSeries/k_nj9tttia/game%20of%20thr',
    headers: {
      'x-rapidapi-key': '37999dd1eamshed33d66a4636653p18e767jsn1b142312e71b',
      'x-rapidapi-host': 'imdb-api.com',
    },
  };
  
  axios.request(options).then(function (response) {
    const data = response.data.results; // get the first 50 results from the response
  
    // create div elements for each movie/show
    const movieElements = data.map(function (result) {
      // create div element for the movie/show
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
  
      // create h1 element for the title
      const titleElement = document.createElement('h1');
      titleElement.textContent = result.title;
      movieElement.appendChild(titleElement);
  
      // create p element for the synopsis
      const synopsisElement = document.createElement('p');
      synopsisElement.textContent = result.description;
      movieElement.appendChild(synopsisElement);
  
      // create img element for the poster
      const posterElement = document.createElement('img');
      posterElement.src = result.image;
      posterElement.alt = result.title;
      movieElement.appendChild(posterElement);
  
      // create video element for the trailer
      const videoElement = document.createElement('video');
      videoElement.src = result.trailer?.link;
      videoElement.controls = true;
      movieElement.appendChild(videoElement);
  
      return movieElement;
    });
  
    // create div elements for each row
    const rowElements = [];
    for (let i = 0; i < Math.ceil(movieElements.length / 5); i++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      rowElements.push(rowElement);
    }
  
    // append the movie/show elements to the row elements
    movieElements.forEach(function (movieElement, index) {
      const rowElement = rowElements[Math.floor(index / 5)];
      rowElement.appendChild(movieElement);
    });
  
    // create div element for the grid
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid');
  
    // append the row elements to the grid element
    rowElements.forEach(function (rowElement) {
      gridElement.appendChild(rowElement);
    });
  
    // append the grid element to the document body
    document.body.appendChild(gridElement);
  }).catch(function (error) {
    console.error(error);
  });
}
  
export default Home;
