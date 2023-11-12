# Nouran_MovieSystem Module

The Movie System Node Module Provides users with the ability to retrieve movie information and book seats for movies

# Installation
Download Node.js  before getting started [download Node.js](https://nodejs.org/en/download/). This node module was done with Node.js v16.17.0.

# Getting Started
require Nouran_MovieSystem before starting 
    ```javascript
    const movieSearch = require('path_of_Module')








# Dummy Movies Data

- `movies` array is initialized to simulate the storage and retrival of movie data
- Elements in the array represent movie object with movie details


# Movie Timing Retrieval Function

The function **searchMovieTiming** retrieves movie timings based on the provided movie title.

## Function Overview

- The function takes in one parameter, `movieTitle`, representing the title of the movie.
- If the movie is found in the `movies` array, the function returns an array of timings for the specified movie. If the movie is not found, the function returns `null`.

## How to Use

1. **Call the Function:**
   ```javascript
   const movieTitle = 'desiredMovieTitle'; // Replace 'desiredMovieTitle' with the actual title
   const movieTiming = searchMovieTiming(movieTitle);

2. **Check Timing & Display**
    ```javascript
    if (movieTiming) {
        console.log(`Timings for "${movieTitle}": ${movieTiming.join(', ')}`);
    } else {
    console.log(`Movie "${movieTitle}" not found.`);
    }

3. **Example**
    ```javascript
    const movieTitle = 'Tom & Jerry'; // Replace with desired movie title 
    const movieTimings = searchMovieTiming(movieTitle);

    if (movieTimings) {
    console.log(`Timings for ${movieTitle}: ${movieTimings.join(', ')}`);
    } else {
    console.log(`No timings found for ${movieTitle}.`);
    }


# Movie Details Retrieval Function 

The function **movieDetails** retrieves movie details based on the provided movie title.

## Function Overview

- The function takes in one parameter, `movieTitle`, representing the title of the movie.
- If a movie with the same title is found in `movies` array, the function returns its details(desceiption,timing,available seats)
- If the provided movie title is not found in `movies` array, the function will return error message `Movie does not exist`

## How to Use

1. **Call the Function:**

- Call `moviesDetails` function and provide desired movie title as argument
    ```javascript
    const movie = 'movieTitle'; // Replace 'movieTitle' with the actual title you are searching for
    const details = movieSearch.movieDetails(movie);

2. **Check & Display Movie Details:**

- Checks if the movie details are available and display them.
    ```javascript
    if (details === 'Movie does not exist') {
    console.log('Movie not found.');
    } else {
    console.log('Movie Details:');
    console.log('Description:', details.description);
    console.log('Timings:', details.timings.join(', '));
    console.log('Available Seats:', details.availableSeats);
    }

3. **Example**
    ```javascript
    const movieTitle = 'Barbie'; // Replace with the movie title you want to search for
    const details = movieSearch.movieDetails(movie);

    if (details === 'Movie does not exist') {
    console.log('Movie not found.');
    } else {
    console.log('Movie Details:');
    console.log('Description:', details.description);
    console.log('Timings:', details.timings.join(', '));
    console.log('Available Seats:', details.availableSeats);
    }



# Movie Filtering by Release Year Function 

The function **filterMoviesByReleaseYear** retrieves movies that were released in a specified year

## Function Overview

- The function takes in one parameter, `year`, representing the release year of a movie.
- The function iterates through `movies` array and checks if the release year of each movie in the array matches the specified year
- If a movie with the same release year is found in `movies` array, the function will store the movie name in `movieNames` array and return it
- If the provided movie release year is not found in `movies` array, the function will return error message `'No movies found for the provided  year`

## How to Use

1. **Call the Function:**

- Call `filterMoviesByReleaseYear` function and provide desired movie release year as argument
    ```javascript
    const filteredMovies = movieSearch.filterMoviesByReleaseYear(year);; // Replace 'year' with the desired release year
    console.log(filteredMovies);


2. **Example**
    ```javascript
    const filteredMovies = movieSearch.filterMoviesByReleaseYear(2002);
    console.log(filteredMovies);



# Movie Seats Booking Function 


The function **bookSeats** allows for booking of seats based on movie title, selected timing, and number of seates to be booked

## Function Overview

- The function takes in three parameters, `movieTitle`, `selectedTimings`, `numSeats`.
- The function searches for the provided `movieTitle` in the `movies` array to see if it matches any
- The function will then verify `selectedTimings` and check for seat availability `numSeats`
- If all conditions are met, the function will simulate booking of seats by reducing the available seats property by number of seats 
- The function will return a success message with the movie title, number of seats booked and selected timing
- If any of the conditions are not met it will return an eror message accordingly 


## How to Use

1. **Call the Function:**

- Call `bookSeats` function and provide the required parameters
    ```javascript
    const bookingResult = movieSearch.bookSeats('movietitle', ['time'], numberOfSeats); //replace parameters with desired movie title, time and number of seats 


2. **Check & Display Booking Details:**

- Checks results of the booking
    ```javascript
    console.log(bookingResult);

3. **Example**
    ```javascript
    const bookingResult = movieSearch.bookSeats('Barbie', ['12:00 PM'], 3);
    console.log(bookingResult);

# Movie with Available Seats at Specified Timing 


The function **findMoviesWithAvailableSeatsAtTiming** retrieves titles of movies that had available seates at specified timing

## Function Overview

- The function takes in one parameters, `timing` which corresponds to movie time
- The function has `matchingMovies` array to store the title of movies that matches the timing passed through the function and have available seats
- The function iterates through `movies` array to check if the specified time matches any of the movies timing in the array and if the available seats is greater than zero
- If all conditions are met, the title of the current movie will be pushed to `matchingMovies` array
- The function will return `matchingMovies` array if there are movies with available seats at the specified time
- If there are no movies with available seats at the specified time, the function will return error messsage


## How to Use

1. **Call the Function:**

- Call `bookSeats` function and provide timing argument
    ```javascript
    const timingToSearch = 'time';  //Replace 'time' with any desired timing
    const result = movieSearch.findMoviesWithAvailableSeatsAtTiming(timingToSearch);


2. **Check & Display Available Movies:**

- Checks results of movies with available seats at the specifies time
    ```javascript
    if (result === null) {
    console.log('No movies found with available seats at the specified timing.');
    } else {
    console.log(`Movies with available seats at ${timingToSearch}:`);
    for (const movieTitle of result) {
        console.log(movieTitle);
    }
    }

3. **Example**
    ```javascript
    const timingToSearch = '08:00 AM';  //Replace with any desired timing
    const result = movieSearch.findMoviesWithAvailableSeatsAtTiming(timingToSearch);
    if (result === null) {
    console.log('No movies found with available seats at the specified timing.');
    } else {
    console.log(`Movies with available seats at ${timingToSearch}:`);
    for (const movieTitle of result) {
        console.log(movieTitle);
    }
    }