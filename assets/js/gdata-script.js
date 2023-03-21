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


function fetchTopSearch (topSearch) {  
fetch(gdataBaseUrl + topSearch + gdataKey, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
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