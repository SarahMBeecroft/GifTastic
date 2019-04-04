//  GIPHY API Key:
// TSAKD90Tb0AsiNIZEV1JwaX38350C95i

// Makes function available after document is loaded 
$(document).ready(function () {

    // Array of topics for reactions gifs
    var topics = ["happy", "sad", "excited", "angry", "nervous", "embarrassed", "amused", "bored", "shocked", "sleepy"];

    // Function to display topics
    function displayTopics() {

        // Declares variable for queryURL
        var topic = $(this).attr("data-topic");
        console.log(topic);

        // Query URL for Giphy
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=TSAKD90Tb0AsiNIZEV1JwaX38350C95i&q=" + topic + "&limit=10&offset=0&rating=PG&lang=en&randomid";
        console.log(queryURL);

        // Ajax call 
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {

            // Testing response to make sure object is there
            console.log(response);

            // Sets up variable for response data
            var results = response.data;

            // Empties div so gifs don't stack 
            $("#gifs").empty();

            // For loop to display gifs
            for (var i = 0; i < results.length; i++) {

                // Creates variables
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var gif = $("<img>");

                // Pause and play attributes
                gif.attr("src", results[i].images.fixed_height_still.url);
                gif.attr("data-still", results[i].images.fixed_height_still.url);
                gif.attr("data-animate", results[i].images.fixed_height.url);
                gif.attr("data-state", "still");
                gif.attr("class", "gif");

                // Appends rating and gif to gif div
                gifDiv.append(p);
                gifDiv.prepend(gif); // Shows rating below gif

                // Adds both rating and gif to gif div in HTML
                $("#gifs").append(gifDiv);

            };
        });
    };

    // Function for displaying buttons
    function makeButtons() {

        // Deletes button contents to avoid having repeats
        $("#buttons").empty();

        // For loop to generate buttons for each item in emotions array
        for (var i = 0; i < topics.length; i++) {
            // Dynamically generates buttons for each movie in array
            var button = $("<button>");
            // Adds class of topic-btn to each button
            button.addClass("topic-btn");
            // Adds data attribute
            button.attr("data-topic", topics[i]);
            // Provides button text
            button.text(topics[i]);
            // Adds buttons to #buttons div
            $("#buttons").append(button, " "); // Extra quotes add space between buttons 
            $("p").css("background-color");
        };
    };

    // Function for click event when user hits submit button
    $("#add-topic").on("click", function(event) {
    event.preventDefault();

    // Takes user's input, trims it, and pushes to array of topics
    var topic = $("#form-input").val().trim();
    topics.push(topic);

    // Calls make buttons function to show with all buttons
    makeButtons();
});

    // Function to add click event when submit button is clicked
    $("#submit").on("click", function(event) {

    event.preventDefault();

    // Takes user's input in text box and trims it so there's no white space
    var topic = $("#userbutton").val().trim();

    // Pushes user's input to array of topics
    topics.push(topic);

    // Calls make buttons function to show user's submission
    showButtons();
    });

    // Function to pause and play gifs
    function playGifs() {

        var dataState = $(this).attr("data-state");

        if (dataState === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");

        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };
    };

    // Click event for topic buttons
    $(document).on("click", ".topic-btn", displayTopics);

    // Displays buttons on page
    makeButtons();

    // Click event to pause and play gifs
    $(document).on("click", ".gif", playGifs);

});

