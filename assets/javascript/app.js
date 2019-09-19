
var topics = ["sports", "games"];

$("button-view").on("click", function () {


    var topic = $(this)("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=&api_key=m46gXewIiFo3RsVZ8LNdLkCjla0ViBvTlimit=10&offset=0&rating=G&lang=en&q=" + topic;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 10; i++) {
            var image = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
            // attaching data-still and non-animated gif to the element
            image = image.attr("data-still", response.data[i].images.fixed_height_still.url);
            // attaching data-animate and an animated gif to the element
            image = image.attr("data-animate", response.data[i].images.fixed_height_downsampled.url)
            // adding class "gif" to the element
            image = image.addClass("gif");

            image = image.attr("data-state", "still");
            //appending the image and the rating below the images
            $("#myStuff").append(image).append("<p> Rating: " + response.data[i].rating + "</p>");
        }
    });
})




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
    



