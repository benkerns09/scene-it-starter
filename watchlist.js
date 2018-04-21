$(function(){//gets the document ready

	

	var watchlistJSON = localStorage.getItem('watchlist');
	var watchlist = JSON.parse(watchlistJSON);
	console.log(watchlist);
//^^WHen the page loads, the watchlist is pulled from LocalStorage

	$().ready(function(){
		var finalHTML = renderMovies(watchlist);
		$('.movies-container').html(finalHTML);
	});
//renders Each movie to "movies-container, just like in index.js"

	function renderMovies(movieArray) {
		var finalHTML = "";
		movieArray.forEach(function(currentMovie) {

		finalHTML += '<div class="card box-space";>';
		finalHTML += '<div class="fill"><img class="card-img-top" src="' + currentMovie.Poster + '" alt="movie poster"></div>';
		finalHTML += '<div class="card-body">';
		finalHTML += '<span class="badge badge-dark inline">' + currentMovie.Year + '</span>';
		finalHTML += '<h4 class="card-title">' + currentMovie.Title + '</h4>';
		finalHTML += '<button data-id="' + currentMovie.imdbID + '" class="btn btn-danger">REMOVE</button>';
		finalHTML += '</div>';
		finalHTML += '</div>';
		
		});
		
		return finalHTML;

	}

});