
    var topics = ["sports", "games"];

    function displayGifInfo(){
        var topic = $(this)("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=m46gXewIiFo3RsVZ8LNdLkCjla0ViBvT"


    }

    function renderButtons(){
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++){
            var a = $("<button>");
            a.addClass("topic");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
            
        }
    }

    // adding a button and pushing it to topics
    $("#add-gif").on("click", function(event){
        event.preventDefault();

        var topic = $("#gif-input").val().trim();
        topics.push(topic);
        renderButtons();

    });

    renderButtons();



