//renderMovies() function that will generate the right HTML based off the data in data.

$(function(){//this is the doucment ready block
//this function will take an array of movie objects and return a string of HTML 
    $('form').on('submit', function(e){
        e.preventDefault();
        var finalHTML = renderMovies(movieData);
        $('.movies-container').html(finalHTML);
    });

    
    function renderMovies(movieArray) {
            var finalHTML = "";//use string concatentation here to start building out your movie HTML.(below)
            movieArray.forEach(function(currentMovie){//this anonymous function has one parameter, which I called currentMovie
                finalHTML += '<div class="card style="width: 18rem";>';//+= is used to concatenate (chain together) strings or add numbers
                finalHTML += '<img class="card-img-top" src="' + currentMovie.Poster + '" alt="Movie Poster">';
                finalHTML += '<div class="card-body">';
                finalHTML += '<h5 class="card-title">'+ currentMovie.Title +'</h5>';
                finalHTML += '<p class="card-text">'+ currentMovie.Year +'</p>';
                finalHTML += '<button class="btn btn-primary">Add</button>';
                finalHTML += '</div>';
                finalHTML += '</div>';
            });
            return finalHTML;
    
    }


});