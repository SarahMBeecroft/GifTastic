// GIPHY API KEY
// Api Key:
// TSAKD90Tb0AsiNIZEV1JwaX38350C95i


$(document).ready(function() {

// Array of topics for reactions gifs
var emotions = ["happy", "sad", "excited", "angry", "nervous", "embarrassed", "amused", "bored", "shocked", "sleepy"];
// Empty variable for topic
var emotion = "";

// Query URL for Giphy
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&limit=10&rating=G&api_key=TSAKD90Tb0AsiNIZEV1JwaX38350C95i";


function makeButtons () {

    // Deletes button contents to avoid having repeats
    $("#buttons").empty();
    
    // For loop to generate buttons for each item in emotions array
    for (var i = 0; i < emotions.length; i++) {
        // Dynamically generates buttons for each movie in array
        var a = $("<button>");
        // Adds class of emotion-btn to each button
        a.addClass("emotion-btn");
        // Adds data attribute
        a.attr("data-name", emotions[i]);
        // Provides button text
        a.text(emotions[i]);
        // Adds buttons to #buttons div
        $("#buttons").append(a, " "); // Extra quotes adds space between buttons 
    }
    
}

// Calls make buttons function
makeButtons();

// On load, elements that are visible include pre-loaded buttons and area for user to submit their own button

// Click event when user clicks on any of the pre-loaded buttons
// 10 gifs tagged with word load in their static state
// User can click gif to animate and then click to pause again, and so on
// Gif rating will load above gif

// Behind the scenes

// Giphy Parameters
// 'q'
// 'limit'
// 'rating' 

// Create array of topics

// Take topics in array and create buttons in HTML (use for loop to append button for each string in array)

// Generate 10 static gifs

// Add links with pause and unpaused states

// Grab gif rating

// Append gif and rating to page

// Create submit button to add new topic, add to array, and append to page

})