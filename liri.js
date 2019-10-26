require("dotenv").config();

//create a variable to access keys file
//create a variable for the required packages
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

//variable to store argument input for command
var command = process.argv[2];
console.log(`command: ${command}`);

//use the slice method to save user input for one or more inputs
var query = process.argv.slice(3).join(" ");
console.log(`input: ${query}`);

//using switch statement to go through commands and fire off search functions
function liriBot(command, query) {
    switch (command) {
        case "concert-this":
            searchBandsInTown(query);
            break;

        case "spotify-this-song":
            searchSpotify(query);
            break;

        case "movie-this":
            searchOMDB(query);
            break;

        case "do-what-it-says":
            getRandom();
            break;

        default:
            console.log(`Please enter a Command: "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says"`);
    }
};

//Search BandsInTown function
function searchBandsInTown(artist) {
    var artist = query;
    var bandsInTownQueryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

    axios.get(bandsInTownQueryURL).then(
        function (response) {
            console.log(`\r\n================\r\n
Name of Venue: ${response.data[0].venue.name} \r\n
Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.country} \r\n
Date of Event: ${moment(response.data[0].datetime).format("MM-DD-YYYY")} \r\n`);
            
        }).catch(function (error) {
            console.log(error);
        });
};

//Search Spotify function
function searchSpotify(songName) {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: "track", query: songName }, function(error, data) {
        if (error) {
            return console.log(`Error occured: ${error}`);
        }

        console.log(data.tracks.items[0]);
        console.log(`\r\n=================\r\n`);
        //add artist
        //add songs name
        //add a preview link of the song from spotify
        //add album the song is from
        
    });
};

//search OMDB function
//make an if condition for an empty input to pull up "Mr. Nobody"
function searchOMDB(movieTitle) {
    var movieTitle = query;
    var apiKey = "trilogy"
    var omdbQueryUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    axios.get(omdbQueryUrl).then(
        function (response) {
            console.log(omdbQueryUrl);
            console.log("================");
            console.log(response.data);
            //add title of movie
            //add year the movie released
            //add imdb rating of movie
            //Rotten tomatoes rating
            //country where the movie was produced
            //language of the movie
            //plot of the movie
            //actors in the movie

        }).catch(function (error) {
            console.log(error);
        });
};

//random function using random txt file
function getRandom() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log(data);
        }
    });
};

liriBot(command, query);