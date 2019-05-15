require("dotenv").config();
const keys = require("./keys.js");
// var axios = require("axios");

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const command = process.argv[2];

// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

if (command == 'spotify-this-song') {

    spotifySearch();

}




function spotifySearch() {
    //Argument to have Ace of Base play if undefined
    let spotifyResult = process.argv[3];
    if (spotifyResult === undefined) {
        song = 'The Sign by Ace of Base'
    } else {
        song = spotifyResult
    }

    //Spotify query
    spotify
        .search({ type: 'track', query: song })
        .then(function (data) {
            // for (let i = 0; i < 3; i++) {
            console.log("========================================================================================================================================================")
            console.log("The bands name is: ", data.tracks.items[0].artists[0].name);
            console.log("The songs name is: ", data.tracks.items[0].name);
            let nuller = JSON.stringify(data.tracks.items[0].preview_url)
            if (nuller === "null") {
                console.log("Click here for a preview of the song: Sorry, but there is no preview available")
                console.log("========================================================================================================================================================")
            }
            else {
                console.log("Click here for a preview of the song:", data.tracks.items[0].preview_url)
                console.log("========================================================================================================================================================")
            }
        })
        .catch(function (err) {
            console.log("error", err)
        })
}