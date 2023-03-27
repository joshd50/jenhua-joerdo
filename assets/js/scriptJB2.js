var topSearch
var midSearch
var bottomSearch
var topIndex = 0;
var bottomIndex = 0;
var shoeIndex = 0;


let topSavedStyles = [];
let bottomSavedStyles = [];
let shoeSavedStyles = [];


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a30f9d1a37msh5cc175700f93f6fp1094cbjsn5d64306f2e3d',
		'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
	}
};


var gdataBaseUrl = 'https://cors-anywhere.herokuapp.com/https://google-data-scraper.p.rapidapi.com/search/shop/';
var gdataKey = '?api_key=5e15448586c1e9fb698790dee1a4e40d';


function fetchTopSearch (topSearch) {
	topSearch = topSearch.split(' ');
	topSearch = topSearch.join('+');
    fetch(gdataBaseUrl + topSearch + gdataKey, options)

        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data
            localStorage.setItem('topData', JSON.stringify(data));
            renderTop(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
	}


function fetchBottomSearch (bottomSearch) {
bottomSearch = bottomSearch.split(' ');
	bottomSearch = bottomSearch.join('+');
    fetch(gdataBaseUrl + bottomSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data
            localStorage.setItem('bottomData', JSON.stringify(data));
            renderBottom(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
	}

	function fetchShoeSearch (shoeSearch) {
		shoeSearch = shoeSearch.split(' ');
	shoeSearch = shoeSearch.join('+');
    fetch(gdataBaseUrl + shoeSearch + gdataKey, options)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to get google data.');
            }
            return response.json();
        })
        .then(function(data) {
            // handle the response data
            localStorage.setItem('shoeData', JSON.stringify(data));
            renderShoe(data);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        })
	}

// for (var i = 0; i < Math.min(3, topData.shopping_results.length); i++)

function renderTop (topData) {
	for (var i = topIndex; i < topIndex + 3; i++) {

		var topImage = topData.shopping_results[i].thumbnail;
		var topTitle = topData.shopping_results[i].title;
		var topLink = topData.shopping_results[i].link;
		var topPrice = topData.shopping_results[i].price;
		var topSource = topData.shopping_results[i].source;

		var currentCard = $('#topCont').find(`#card${i -  topIndex}`);


		currentCard.find('.shirts').attr('src', null);
		currentCard.find('.shirts').attr('src',topImage);
		currentCard.find('h5').text(topSource);
		currentCard.find('p.first').text(topTitle);
		currentCard.find('p.second').text(topPrice);
        if (currentCard.hasClass("main")) {
            currentCard.find('a').attr("href", topLink);
        } 
	}
}

function renderBottom (bottomData) {
	for (var i = bottomIndex; i < bottomIndex + 3; i++) {

		var bottomImage = bottomData.shopping_results[i].thumbnail;
		var bottomTitle = bottomData.shopping_results[i].title;
		var bottomLink = bottomData.shopping_results[i].link;
		var bottomPrice = bottomData.shopping_results[i].price;
		var bottomSource = bottomData.shopping_results[i].source;

		var currentCard = $('#bottomCont').find(`#card${i -  bottomIndex}`);

        currentCard.find('.pants').attr('src', '');
		currentCard.find('.pants').attr('src',bottomImage);
		currentCard.find('h5').text(bottomSource);
		currentCard.find('p.first').text(bottomTitle);
		currentCard.find('p.second').text(bottomPrice);
        if (currentCard.hasClass("main")) {
            currentCard.find('a').attr("href", bottomLink);
        }
	}
}

function renderShoe (shoeData) {
	for (var i = shoeIndex; i < shoeIndex + 3; i++) {
		var shoeImage = shoeData.shopping_results[i].thumbnail;
		var shoeTitle = shoeData.shopping_results[i].title;
		var shoeLink = shoeData.shopping_results[i].link;
		var shoePrice = shoeData.shopping_results[i].price;
		var shoeSource = shoeData.shopping_results[i].source;

		var currentCard = $('#shoeCont').find(`#card${i - shoeIndex}`);
        currentCard.find('.shoes').attr('src', '');
		currentCard.find('.shoes').attr('src',shoeImage);
		currentCard.find('h5').text(shoeSource);
		currentCard.find('p.first').text(shoeTitle);
		currentCard.find('p.second').text(shoePrice);
        if (currentCard.hasClass("main")) {
            currentCard.find('a').attr("href", shoeLink);
        }
	}
}


function pullAIdata(){
    var rawData = localStorage.getItem('data');
        var entries =  rawData.split(",");
        fetchTopSearch(entries[0].trim());
        fetchBottomSearch(entries[1].trim());
        fetchShoeSearch(entries[2].trim());
}

// turn on when switching to live
pullAIdata();

// turn off when switching to live
// localStorage.setItem('topData', JSON.stringify(topObject));
// localStorage.setItem('bottomData', JSON.stringify(bottomObject));
// localStorage.setItem('shoeData', JSON.stringify(shoeObject));

// renderBottom(bottomObject);
// renderShoe(shoeObject);
// renderTop(topObject);


$('.rightShirts').click(function(){
    var topData = JSON.parse(localStorage.getItem('topData'))
    var tempData = topData.shopping_results.shift()
    topData.shopping_results.push(tempData)
    localStorage.setItem('topData',JSON.stringify(topData))
    renderTop(topData)
})

$('.leftShirts').click(function(){
    var topData = JSON.parse(localStorage.getItem('topData'))
    var tempData = topData.shopping_results.pop()
    topData.shopping_results.unshift(tempData)
    localStorage.setItem('topData',JSON.stringify(topData))
    renderTop(topData)
})

$('.rightPants').click(function(){
    var bottomData = JSON.parse(localStorage.getItem('bottomData'))
    var tempData = bottomData.shopping_results.shift()
    bottomData.shopping_results.push(tempData)
    localStorage.setItem('bottomData',JSON.stringify(bottomData))
    renderBottom(bottomData)
})

$('.leftPants').click(function(){
    var bottomData = JSON.parse(localStorage.getItem('bottomData'))
    var tempData = bottomData.shopping_results.pop()
    bottomData.shopping_results.unshift(tempData)
    localStorage.setItem('bottomData',JSON.stringify(bottomData))
    renderBottom(bottomData)
})

$('.rightShoes').click(function(){
    var shoeData = JSON.parse(localStorage.getItem('shoeData'))
    var tempData = shoeData.shopping_results.shift()
    shoeData.shopping_results.push(tempData)
    localStorage.setItem('shoeData',JSON.stringify(shoeData))
    renderShoe(shoeData)
})

$('.leftShoes').click(function(){
    var shoeData = JSON.parse(localStorage.getItem('shoeData'))
    var tempData = shoeData.shopping_results.pop()
    shoeData.shopping_results.unshift(tempData)
    localStorage.setItem('shoeData',JSON.stringify(shoeData))
    renderShoe(shoeData)
})


$('#saveDesign').click(function(event) {
  // Find the main shirt card and get its information
    event.preventDefault();
    var mainShirtCard = $('.mainShirts').children().first();
    var mainShirtImage = mainShirtCard.find('.shirts').attr('src');
    var mainShirtTitle = mainShirtCard.find('p.first').text();
    var mainShirtLink = mainShirtCard.find('a').attr('href');
    var mainShirtPrice = mainShirtCard.find('p.second').text();
    var mainShirtSource = mainShirtCard.find('h5').text();

    // Pants
    var mainPantsCard = $('.mainPants').children().first();
    var mainPantsImage = mainPantsCard.find('.pants').attr('src');

    // Shoes
    var mainShoesCard = $('.mainShoes').children().first();
    var mainShoesImage = mainShoesCard.find('.shoes').attr('src');
    // Create an object with the main shirt information
    var imageShirtSource = mainShirtImage;
    var imagePantsSource = mainPantsImage;
    var imageShoesSource = mainShoesImage;
    var mainObject = {
    mainShirt: imageShirtSource,
    mainPants: imagePantsSource,
    mainShoes: imageShoesSource
    };

    // Add the main shirt object to the saved styles array
    
    // Save the saved styles array to local storage
    topSavedStyles.push(mainObject);
    localStorage.setItem("topSavedStyles", JSON.stringify(topSavedStyles));


    init();
});


function init() {
    var topSaved = JSON.parse(localStorage.getItem("topSavedStyles"));
    console.log(topSaved);
    var hanger = document.querySelector("#hanger");
    if(topSaved !== null) { 
        topSavedStyles = topSaved;
        hanger.innerHTML = '';
        for(i=0; i <topSavedStyles.length; i++) {

            var shirtSource = topSaved[i].mainShirt;
            var pantsSource = topSaved[i].mainPants;
            var shoesSource = topSaved[i].mainShoes;

        
            hanger.innerHTML += `<li class="outfit"><button class="btn-close" type="button" aria-label="Close">CLOSE</button><image src="${shirtSource}"><image src="${pantsSource}"><image src="${shoesSource}"></li>`;

            // add event listener to the close button
            $('.btn-close').on('click', function () {
                var index = $(this).parent().index();
                // remove the city from the cities array
                topSavedStyles.splice(index, 1);

                // save the updated cities array in local storage
                localStorage.setItem('topSavedStyles', JSON.stringify(topSavedStyles));

                // re-render the city list
                init();
        });
    };}
};

init();


$('#gohome').click(function (){
    window.location.assign("../index.html")
})