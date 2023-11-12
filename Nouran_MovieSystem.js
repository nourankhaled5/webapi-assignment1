//Array to simulate the storing and retrival of dummy data
const movies = [
    {
      id: 1,
      title: 'Tom & Jerry',
      description: 'Tom & Jerry-description',
      timings: ['10:00 AM', '12:00 PM', '8:00 PM'],
      availableSeats: 20,
      releaseYear:2002
    },
    {
      id: 2,
      title: 'Barbie',
      description: 'Barbie-description',
      timings: ['08:00 AM', '02:00 PM', '10:00 PM'],
      availableSeats: 40,
      releaseYear: 2002
    },
    {
      id: 3,
      title: 'shrek',
      description: 'shrek-description',
      timings: ['08:00 AM', '02:00 PM', '10:00 PM'],
      availableSeats: 10,
      releaseYear: 2003
    }
  ];
  
  
  
  //Function to retrieve movie timings based on the provided movie title
  //The function searchMovieTiming takes in one parameter("movieTitle") which corresponds to the title of the movie we want to retrieve the timing for.
  function searchMovieTiming(movieTitle){
    //movies.find method is used to search for a movie in the movies array. 
    //The .find method iterates through the movies array and returns the first movie that fulfill the condition.
    //The condition checks if the title property of each movie in the array matches the provided movieTitle.
    //If a movie with a matching title is found in the movies array, it is assigned to the movie variable.
    const movie = movies.find((movieName) => movieName.title === movieTitle);
    if(movie){
     // If a matching movie is found, the function returns the timings property of that movie 
      return movie.timings;
    }
    else{
      //If no matching movie is found, the function returns null.
      return null;
    }
  }
  
  
  
  //Function to retrieve movie details based on the provided movie title
  //The function movieDetails takes in one parameter("movieTitle") which corresponds to the title of the movie we want to retrieve the timing for.
  function movieDetails(movieTitle) {
    //movies.find method is used to search for a movie in the movies array. 
    //The .find method iterates through the movies array and returns the first movie details that fulfill the condition.
    //The condition checks if the title property of each movie in the array matches the provided movieTitle.
    //If a movie with a matching title is found in the movies array, it is assigned to the movie variable.
    const movie = movies.find((movie) => movie.title === movieTitle);
    if (movie) {
      //If a matching movie is found, the function extract specific movie details from movies object. 
      //It extracts the description, timings, and availableSeats properties and stores them in separate variables.
      const { description, timings, availableSeats } = movie;
      //The function returns an object containing the extracted properties. 
      return {
        description,
        timings,
        availableSeats,
      };
    } else {
      //If no matching movie is found, the function returns error msg 
      return 'Movie does not exist';
    }
  }
  
  
  
  //Function filters and retrieve the titles of movies that were released in a specific year.
  //The function filterMoviesByReleaseYear takes one parameter("year") which corresponds to the year of movie release.
  function filterMoviesByReleaseYear(year) {
    //An empty array "movieNames" is initialized to store the titles of movies that match the provided release year.
    const movieNames = [];
    // for loop iterate through the movies array. 
    for (let i = 0; i < movies.length; i++) {
      //if statement checks if the releaseYear property of the current movie object matches the provided year.
      //if the release year of the current movie matches the provided year, the title of that movie is pushed into the "movieNames" array
      if (movies[i].releaseYear === year) {
        movieNames.push(movies[i].title);
      }
    }
    //checks if the "movieNames" array has any elements 
    if (movieNames.length > 0) {
      //if there are movies in the array, the function returns the "movieNames" array containing the titles of movies.
      return movieNames;
    } else {
      //If no mmovie matches the release year, the function returns error msg 
      return "No movies found for the provided year.";
    }
  }
  
  
  
  // The bookSeats function, book seats for a movie based on the provided movie title, selected timings, and the number of seats to be booked
  //The function bookSeats takes 3 parameter("movieTitle,selectedTimings,numSeats") which corresponds to movie title, time to book & seats to be booked
  function bookSeats(movieTitle, selectedTimings, numSeats) {
    //movies.find method is used to search for a movie in the movies array with a title that matches the provided movieTitle.
    const movie = movies.find((movie) => movie.title === movieTitle);
  
    //If no matching movie is found, the function returns error msg
    if (!movie) {
      return 'Movie does not exist';
    }
  
    // If selectedTimings is not valid or empty, the function returns error msg
    if (!selectedTimings || selectedTimings.length === 0) {
      return 'Please select a valid timing';
    }
  
    let invalidTiming = null;
    //for loop iterates through the selectedTimings array. 
    for (let i = 0; i < selectedTimings.length; i++) {
      //if each selected timing is included in the movie.timings array. 
      //if any of the selected timings do not match the movie's available timings, it sets invalidTiming to the first invalid timing found.
      if (!movie.timings.includes(selectedTimings[i])) {
        invalidTiming = selectedTimings[i];
      }
    }
  
    // if invalidTiming is found, it returns a message specifying the invalid timing, 
    if (invalidTiming) {
      return `Invalid timing: ${invalidTiming}`;
    }
  
    //checks if numSeats is less than or equal to zero, it returns error msg
    if (numSeats <= 0) {
      return 'Please select a valid number of seats';
    }
  
    //checks if the requested number of seats is greater than the available seats.
   // if there are not enough seats available, it returns error msg 
    if (numSeats > movie.availableSeats) {
      return 'Not enough seats available';
    }
  
    //if all the previous conditions pass, it simulates booking the seats by reducing the availableSeats property of the selected movie by numSeats.
    movie.availableSeats -= numSeats;
    //the function returns a success message that includes the number of seats booked, the movie title, and the selected timings
    return `Successfully booked ${numSeats} seat for "${movieTitle}" at ${selectedTimings.join(', ')}`;
  }
  
  
  
  
  // The findMoviesWithAvailableSeatsAtTiming function return the titles of movies that have available seats at a specified timing.
  //The function findMoviesWithAvailableSeatsAtTiming takes 1 parameter(timing) which corresponds to movie time.
  function findMoviesWithAvailableSeatsAtTiming(timing) {
    //matchingMovies array  is initialized to store the titles of movies that match the specified timing and have available seats.
    const matchingMovies = [];
    //for loop is used to iterate through the movies
    for (let i = 0; i < movies.length; i++) {
      //checks if the timing specified matches one of the timings in the movies[i].timings array.
      //checks if the availableSeats for the current movie is greater than 0(there are available seats) 
      if (movies[i].timings.includes(timing) && movies[i].availableSeats > 0) {
        //if both conditions are met the title of the current movie is pushed to matchingMovies array 
        matchingMovies.push(movies[i].title);
      }
    }
    //checks if the matchingMovies array has any elements
    if (matchingMovies.length > 0) {
      //if there are movies with available seats at the specified timing the function returns the matchingMovies array with the titles of those movies.
      return matchingMovies;
    } else {
      //if no matching movies with available seats are found the function retuen error msg
      return 'No movies found with available seats at the specified timing.';
    }
  }
  
  module.exports = {
    searchMovieTiming,
    movieDetails,
    filterMoviesByReleaseYear,
    bookSeats,
    findMoviesWithAvailableSeatsAtTiming
  };