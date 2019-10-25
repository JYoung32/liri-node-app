require("./.gitignore/node_modules/dotenv").config();

//create a variable to access keys file
//create a variable for the required packages
var keys = require("./keys.js");
var Spotify = require("./.gitignore/node_modules/node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("./.gitignore/node_modules/axios");
var momemt = require("./.gitignore/node_modules/moment");

//variable to store argument input for command
var command = process.argv[2];
console.log("command: " + command);

//use the slice method to save user input for one or more inputs
var query = process.argv.slice(3).join(" ");
console.log("input: " + query);
