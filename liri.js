require("./.gitignore/node_modules/dotenv").config();

//create a variable to access keys file
//create a variable for the required packages
var keys = require("./keys.js");
var Spotify = require("./.gitignore/node_modules/node-spotify-api");
// var spotify = new Spotify(keys.spotify);
var axios = require("./.gitignore/node_modules/axios");
var momemt = require("./.gitignore/node_modules/moment");

//variable to store argument input for command
var command = process.argv[2];
console.log("command: " + command);

//use the slice method to save user input for one or more inputs
var query = process.argv.slice(3).join(" ");
console.log("input: " + query);

//using switch statement to go through commands and fire off search functions
function liriBot(command, query) {
    switch (command) {
        case "concert-this":
            searchBandsInTown(query);
            break;

        case "spotify-this-song":
            //spotify function goes here;
            break;

        case "movie-this":
            //movie function goes here;
            break;

        case "do-what-it-says":
            //random function
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
            console.log(bandsInTownQueryURL);
            console.log("================");
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
};

liriBot(command, query);