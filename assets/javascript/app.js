
var topics = ["sports", "games"];

$(document).on("click", "button", function () {


    var topic = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    topic + "&api_key=UOBPcImBnWkrOWt9xoGo5rDYaopN859Z&limit=10";
 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        for ( var i = 0; i < results.length; i++){
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImage = $("<img>");
            gifImage.addClass("gif");
            gifImage.attr("src", results[i].images.fixed_height.url);


            gifDiv.append(p);
            gifDiv.append(gifImage);

            $("#gifs-here").prepend(gifDiv);

        }
    });

})
$("#gifs-here").on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    // if the data-state is still we will have the src to become an animated gif and vice versa.
    if (state === "still") {
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("data-animate"));
    } else {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("data-still"));
    }
});

function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);

    }
}

// adding a button and pushing it to topics
$("#add-gif").on("click", function (event) {
    event.preventDefault();

    var topic = $("#gif-input").val().trim();
    topics.push(topic);
    renderButtons();
});
// $(document).on("click", ".topic-btn", displayGifInfo);

renderButtons();
    



