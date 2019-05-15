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
 
if (command == 'spotify-this-song'){
    let spotifyResult = process.argv[3];
        console.log("*********************************************************************************")
        console.log("Here are the search results for song:", spotifyResult);
        console.log("*********************************************************************************")

    for (let i = 0; i<3; i++){

    spotify.search({ type: 'track', query: spotifyResult}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    //   console.log(data.tracks.items[0]);
        //TODO: Artist
        console.log("=================================================================================")
        console.log("The bands name is: ",data.tracks.items[i].artists[0].name);
        console.log("The songs name is: ",data.tracks.items[i].name);
        let nuller = JSON.stringify(data.tracks.items[i].preview_url)
        if (nuller === "null"){
            console.log("Click here for a preview of the song: Sorry, but there is no preview available")

        }
        else {
        console.log("Click here for a preview of the song:", data.tracks.items[i].preview_url)
        }
      });
    }
}




//TODO: working spotify.search
