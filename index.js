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
                finalHTML += '<img class="card-img-top" src="' + currentMovie.Poster + '" alt="Movie Poster">';//THis has the image for each movie
                finalHTML += '<div class="card-body">';//This has the sizing for the movie cards
                finalHTML += '<h5 class="card-title">'+ currentMovie.Title +'</h5>';//Holds the title for the movie
                finalHTML += '<p class="card-text">'+ currentMovie.Year +'</p>';//holds the year
                finalHTML += '<button class="btn btn-primary">Add</button>';//Includes the ADD button.
                finalHTML += '</div>';//closes out the width of the card div
                finalHTML += '</div>';//closes out the body specification for the card div
            });//closes out the for each movie.
            return finalHTML;//returns this variable..witch is equal to the renderMovies function
    
    }//closes out the renderMovies function


});//closes out all of our jQuery specifications