# liri-node-app

### Overview

Liri is a one-stop command line application that takes in parameters to search for relevant data on songs, concert venues, and movies.

This application makes calls to the Spotify API(also known as Application Programming Interface), BandsInTown API, and OMDB API for the search results.

***NOTE: If you would like to clone this repo, you will have to add your own .env file with your own personal Spotify ID and Secret. The format of your .env file should look like the example below.

>### Spotify API Key
>
>SPOTIFY_ID=<your Spotify ID>
>SPOTIFY_SECRET=<your Spoitify Secret>

### Liri's Commands

This app can take in one of the following commands:

* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

### What Each Commands Can Do

1. `node liri.js concert-this <artist/band name here>`

     * Name of the venue
     * Venue location
     * Date of the Event ("MM/DD/YYYY")

EXAMPLE:
![Concert Example](images/concert_this screenshot.png)

2. `node liri.js spotify-this-song '<song name here>'`

     * The song's name
     * Artist(s)
     * The album that the song is from
     * A preview link of the song from Spotify
     

   *If no song is provided then your program will default to "The Sign"*

EXAMPLE:
![Song Example](images\spotify-this-song screenshot.png)

3. `node liri.js movie-this '<movie name here>'`

     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.

   *If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'*

EXAMPLE:
![Movie Example](images\movie-this screenshot.png)

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


### Technologies Used

* JavaScript
* Node.js
* BandsInTown API (via Axios npm module)
* Spotify API (via Stopify npm module)
* OMDB API (via Axios npm module)

<!-- Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development -->