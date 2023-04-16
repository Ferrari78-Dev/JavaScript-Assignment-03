// Define the URL of the JSON file

(async function () {
  const moviesUrl = "./data.json";
// Define the function to fetch the movies from the JSON file
 async function fetchMovies() {
  const response = await fetch(moviesUrl);
  const movies = await response.json();
  return movies;
}



const genre = document.getElementById("Genre");
  const year = document.getElementById("Year");
  const rating = document.getElementById("Rating");
  const language = document.getElementById("Language");
  const filterBtn = document.getElementById("filter-btn");

// Define the function to filter the movies based on user input
function filterMovies(movies, genre, rating, year,language) {
  return movies.filter(movie => {
    return (!genre || movie.genres === genre) &&
           (!rating || movie.vote_average >= rating) &&
           (!language || movie.original_language === language)&&
           (!year || movie.release_date.year === year);
  });
}

// Define the function to display the filtered movies in the table
function displayMovies(movies) {
  const tableBody = document.getElementById('movie-table-body');
  tableBody.innerHTML = '';
  movies.forEach(movie => {
    const row = tableBody.insertRow();
    const rankCell = row.insertCell();
    rankCell.textContent = movie.rank;
    const titleCell = row.insertCell();
    titleCell.textContent = movie.title;
    const yearCell = row.insertCell();
    yearCell.textContent = movie.year;
  });
}
filterBtn.addEventListener("click", filterMovies);
})