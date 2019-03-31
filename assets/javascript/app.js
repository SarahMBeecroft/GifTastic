//  GIPHY API Key:
// TSAKD90Tb0AsiNIZEV1JwaX38350C95i

// Makes function available after document is loaded 
$(document).ready(function () {

    // Array of topics for reactions gifs
    var emotions = ["happy", "sad", "excited", "angry", "nervous", "embarrassed", "amused", "bored", "shocked", "sleepy"];
    // Empty variable for topic

    function makeButtons() {

        // Deletes button contents to avoid having repeats
        $("#buttons").empty();

        // For loop to generate buttons for each item in emotions array
        for (var i = 0; i < emotions.length; i++) {
            // Dynamically generates buttons for each movie in array
            var a = $("<button>");
            // Adds class of topic-btn to each button
            a.addClass("topic-btn");
            // Adds data attribute
            a.attr("data-name", emotions[i]);
            // Provides button text
            a.text(emotions[i]);
            // Adds buttons to #buttons div
            $("#buttons").append(a, " "); // Extra quotes adds space between buttons 
        }
    }

    // Calls makeButtons function so they display on page
    makeButtons();
 
    // Click event for buttons
    $(this).click(function () {
        console.log(this);

        // Declares variable for queryURL
        var topic = $(this).attr("data-name");

        // Query URL for Giphy
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=TSAKD90Tb0AsiNIZEV1JwaX38350C95i&limit=10&rating=pg";
      
        // Ajax call for button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {
        
        // Creates a div to hold the gifs
        var gifDiv = $("<div class='gifs'>");

        // Stores the rating data
        var rating = response.rating;
     
        // Creating an element to have the rating displayed
        var displayRating = $("<p>").text("Rating: " + rating);
     
        // Displays the rating
        gifDiv.append(displayRating);
     
        // Pulls the url for the gif
        var gifURL = response.image;
     
        // Creating an element to hold the image
        var image = $("<img>").attr("src", gifURL);
     
        // Appending the image
        gifDiv.append(image);
     
        // Putting the entire movie above the previous movies
        $("#gifs").prepend(gifDiv);
                    
                
            
        });
    



    });

    // On click event for when button is clicked
    $("#textbox").on("click", function (event) {
        // event.preventDefault();not sure if needed 
        // Grabs user's input from textbox
        var topic = $("#textbox").val().trim(); // Trim will get rid of any white space before/after user input
        // Adds movie from text box to the emotions array
        emotions.push(topic);
        // Calls make button function
        makeButton();


        // Come back to this 
        function submitButton() {

        }
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
    });
});
