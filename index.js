//renderMovies() function that will generate the right HTML based off the data in data.

$(function(){//this is the doucment ready block for jquery
//this function will take an array of movie objects and return a string of HTML 
    $('form').on('submit', function(e){//This is a jQuery FORM submit listener. The anonymous function in this listener has one parameter(e). We will use this parameter when we use the prevent default.  .on() method attaches event handlers (something that is done when an event occurs) to the selected set of elements in JQUery
        e.preventDefault();//makes it so that the page does not automatically refresh. tells the user that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propgate as usual. 
        var finalHTML = renderMovies(movieData);//putting the function as a variable. This variable will be passed in as movieArray in the rendermovies function (below)
        $('.movies-container').html(finalHTML);//used jquery to select the "movies-container" div and fill it with the finalHTML.
    });//closing out the form Jquary function


    function renderMovies(movieArray) {//Writes a renderMovies function that will generate the right HTML based off the data in data.js. creates a function that tells what to incllude if someone puts something into search bar. Has all the movies in the movieArray parameter
            var finalHTML = "";//use string concatentation here to start building out your movie HTML.(below). THis variable right now is equal to an empty string. This string will depend on something else
            movieArray.forEach(function(currentMovie){//this is a forEach loop on the movieArray parameter. I included a parameter on this called currentMovie
                finalHTML += '<div class="card style="width: 18rem";>';//+= is used to concatenate (chain together) strings or add numbers
                finalHTML += '<img class="card-img-top" src="' + currentMovie.Poster + '" alt="Movie Poster">';//THis has the image for each movie. I am imbedding movie data through this
                finalHTML += '<div class="card-body">';//This has the sizing for the movie cards
                finalHTML += '<h5 class="card-title">'+ currentMovie.Title +'</h5>';//Holds the title for the movie. I am embedding movie data through this. We will also need to embed the ID of the movie into the HTML so that later we can use that ID when we save movies to the watch list.
                finalHTML += '<p class="card-text">'+ currentMovie.Year +'</p>';//holds the year
                finalHTML += '<button data-id="'+ currentMovie.imdbID +'" class="btn btn-primary button">Add</button>';//Includes the ADD button. We will be embedding the Movie ID into an attribute called data-id in this button's HTML tag
                finalHTML += '</div>';//closes out the width of the card div
                finalHTML += '</div>';//closes out the body specification for the card div
            });//closes out the for each movie.
            return finalHTML;//returns this variable..witch is equal to the renderMovies function
    
    }//closes out the renderMovies function

    $('.movies-container').on('click', ".button", function() {//waiting for users to click on an add button.
        var imdbID = $(this).data('id');//selects the add button that was just clicked.Inside this listener we extract the relevant ID from the add buttons. Calls the jQuery function .data and passes it the string 'id' as a parameter. This will tell us which movie the user clicked on. 
        var movie = movieData.find(function(currentMovie){//we extracted into movie the relevant object from movieData with the help of .find() this find function has an anonymous function that takes currentMovie as a parameter. .find already has jQuery power
            return currentMovie.imdbID == imdbID;
        });
        
        
        var watchlistJSON = localStorage.getItem('watchlist');//NOw...pulling in watchlist from localStorage.
        var watchlist = JSON.parse(watchlistJSON);//Add to WatchList. Parse takes JSON string and transforms it into JavaScript object
        if (watchlist === null) {
            watchlist = [];
        }
        watchlist.push(movie);//pushes movie to watchlist
        watchlistJSON = JSON.stringify(watchlist);//turns watchlist back into JSON
        localStorage.setItem('watchlist', watchlistJSON);//Saves teh JSONified watchlist back to local storage

        
        //Save back to localStorage
    });//this variable will contain the rest of the movie data
});//selects the movies container. Event hadnlers are bound only to the currently selected elements; they must exist at the time your code makes the call to .on(). When a selector is provided, the handler is referred to as delegated. .on() attaches event handlers to the currently selected set of elements in the JQUERY object. Has to be .button because it is a class. Calls an anonymous function. Does not matter if it is single or double quotes for ".button"
//^^making use of local storage object so we can save the list of movies that the user wants to watch
//closes out all of our jQuery specification