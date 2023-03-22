var topSearch
var midSearch
var bottomSearch


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a30f9d1a37msh5cc175700f93f6fp1094cbjsn5d64306f2e3d',
		'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
	}
};

var gdataBaseUrl = 'https://google-data-scraper.p.rapidapi.com/search/shop/'
var gdataKey = '?api_key=1cbefa30f9ed00f3afb422efeda5fd3b'


  
// fetch(gdataBaseUrl + topSearch + gdataKey, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))

// 	.catch(err => console.error(err));


function fetchTopSearch (topSearch) {
	topSearch = topSearch.split(' ')
	topSearch = topSearch.join('+')
	console.log(gdataBaseUrl + topSearch + gdataKey)
    fetch(gdataBaseUrl + topSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data

			console.log(data)
            renderTop(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // renderCityList();
        });
	}

// function (fetchMidSearch) {
// 	fetch(gdataBaseUrl + midSearch + gdataKey, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }

function fetchBottomSearch (bottomSearch) {
bottomSearch = bottomSearch.split(' ')
	bottomSearch = bottomSearch.join('+')
	console.log(gdataBaseUrl + bottomSearch + gdataKey)
    fetch(gdataBaseUrl + bottomSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data

			console.log(data)
            renderBottom(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // renderCityList();
        });
	}

	function fetchShoeSearch (shoeSearch) {
		shoeSearch = shoeSearch.split(' ')
	shoeSearch = shoeSearch.join('+')
	console.log(gdataBaseUrl + shoeSearch + gdataKey)
    fetch(gdataBaseUrl + shoeSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data

			console.log(data)
            renderShoe(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // renderCityList();
        });
	}

// for (var i = 0; i < Math.min(3, topData.shopping_results.length); i++)

function renderTop (topData) {
	console.log(topData.shopping_results[0])
	for (var i = 0; i < 3; i++) {
		var topImage = topData.shopping_results[i].thumbnail
		var topTitle = topData.shopping_results[i].title
		var topLink = topData.shopping_results[i].link
		var topPrice = topData.shopping_results[i].price
		var topSource = topData.shopping_results[i].source

		var currentCard = $('#topCont').find('#card' + i)
		console.log(currentCard)

		currentCard.find('img').attr('src',topImage)
		currentCard.find('h5').text(topSource)
		currentCard.find('p.first').text(topTitle)
		currentCard.find('p.second').text(topPrice)
	}
}

function renderBottom (bottomData) {
	console.log(bottomData.shopping_results[0])
	for (var i = 0; i < 3; i++) {
		var bottomImage = bottomData.shopping_results[i].thumbnail
		var bottomTitle = bottomData.shopping_results[i].title
		var bottomLink = bottomData.shopping_results[i].link
		var bottomPrice = bottomData.shopping_results[i].price
		var bottomSource = bottomData.shopping_results[i].source

		var currentCard = $('#bottomCont').find('#card' + i)
		console.log(currentCard)

		currentCard.find('img').attr('src',bottomImage)
		currentCard.find('h5').text(bottomSource)
		currentCard.find('p.first').text(bottomTitle)
		currentCard.find('p.second').text(bottomPrice)
	}
}

function renderShoe (shoeData) {
	console.log(shoeData.shopping_results[0])
	for (var i = 0; i < 3; i++) {
		var shoeImage = shoeData.shopping_results[i].thumbnail
		var shoeTitle = shoeData.shopping_results[i].title
		var shoeLink = shoeData.shopping_results[i].link
		var shoePrice = shoeData.shopping_results[i].price
		var shoeSource = shoeData.shopping_results[i].source

		var currentCard = $('#shoeCont').find('#card' + i)
		console.log(currentCard)

		currentCard.find('img').attr('src',shoeImage)
		currentCard.find('h5').text(shoeSource)
		currentCard.find('p.first').text(shoeTitle)
		currentCard.find('p.second').text(shoePrice)
	}
}





function logSubmit(event) {
	event.preventDefault();
	const topInput = document.getElementById("top-input");
	const bottomInput = document.getElementById("bottom-input");
	const shoeInput = document.getElementById("shoe-input");
	const topText = topInput.value;
	const bottomText = bottomInput.value;
	const shoeText = shoeInput.value;
	fetchTopSearch(topText);
	fetchBottomSearch(bottomText);
	fetchShoeSearch(shoeText);

}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

