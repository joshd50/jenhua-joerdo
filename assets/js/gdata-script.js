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
            console.log(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
        .finally(function() {
            // re-render the city list after the weather data has been retrieved
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


function logSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  fetchTopSearch(searchText);
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

