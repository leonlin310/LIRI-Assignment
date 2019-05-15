require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const command = process.argv[2];


if (command == 'spotify-this-song') {
    spotifySearch();
}
else if (command == "concert-this") {
    concertThis();
}
else if (command == "movie-this") {
    movieThis();
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

function concertThis() {
    let artist = process.argv[3];
  
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                // Then we print out the imdbRating
                //   console.log(response.data[0]);
                for (i = 0; i < 3; i++) {
                    console.log("========================================================================================================================================================")
                    console.log("Venue Name: ", response.data[i].venue.name)
                    console.log("Venue Location: ", `${response.data[i].venue.city}, ${response.data[0].venue.country}`)
                    //TODO: Need to use MOMENT.JS to format this section!!
                    console.log("Date of the Event: ", response.data[i].datetime)
                    console.log("========================================================================================================================================================")
                }
            }
        )
        .catch(function (err) {
            if (artist === undefined){
                console.log("You did not enter an artist")
            }
        })
}

function movieThis(){

}
