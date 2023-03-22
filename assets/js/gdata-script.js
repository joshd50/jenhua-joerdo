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

// function (fetchBottomSearch) {
// 	fetch(gdataBaseUrl + bottomSearch + gdataKey, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }


// for (var i = 0; i < Math.min(3, topData.shopping_results.length); i++)

function renderTop (topData) {
	console.log(topData.shopping_results[0])
	for (var i = 0; i < 3; i++) {
		var topImage = topData.shopping_results[i].thumbnail
		var topTitle = topData.shopping_results[i].title
		var topLink = topData.shopping_results[i].link
		var topPrice = topData.shopping_results[i].price
		var topSource = topData.shopping_results[i].source

		var currentCard = $('#card' + i)
		console.log(currentCard)

		currentCard.find('img').attr('src',topImage)
		currentCard.find('h5').text(topSource)
		currentCard.find('p.first').text(topTitle)
		currentCard.find('p.second').text(topPrice)
	}
}






function logSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  fetchTopSearch(searchText);
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

