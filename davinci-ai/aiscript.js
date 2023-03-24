var aiResponse
var apiKey = ""


function OpenaiFetchAPI(userInput,value) {
  console.log("Calling GPT3");
  var url = "https://api.openai.com/v1/completions";
  var bearer =
    "Bearer " + apiKey;

    var prmpt = "You are a fashion expert. Please create a 3 piece outfit (15 words max) for a" + value + "who needs" + userInput +". The items generated should include a random list of tops, bottoms, shoes, or accessories. Please limit details, only output the items generated, and do not reference their gender."

  fetch(url, {
    method: "POST",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        model: 'text-davinci-003',
      prompt: prmpt, // THIS IS WHERE PROMPT WILL GO
      max_tokens: 100,
      temperature: 1,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      console.log(data["choices"][0].text);
      aiResponse = data["choices"][0].text
//save reponse to local storage
      localStorage.setItem('data',aiResponse);
      window.location.assign("../displayJB2.html")
      
    })
    .catch((error) => {
      console.log("Something bad happened " + error);
    });
}

// GLOBAL VARIABLES
var button = document.getElementById("homebutton");
var userSelected = document.getElementById("selection");

function fetchOutput(userInput, userSelection) {
  var output = userInput + " " + userSelection; 
  output = output.split(" ");
  output = output.join(" + ");
  console.log(output)

  fetch(OpenaiFetchAPI + "?q=" + output)
    .then(function(response) {
      if (!response.ok) {
          throw new Error('Error getting AI data.');
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      renderOutput(data);
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    })
    .finally(function() {
    });
}

function renderOutput(data) {
  console.log(data[0]);
  for (var i = 0; i < 3; i++) {
    var objectOutput = data.object[i].text;
    console.log(objectOutput);
  }
}

function submitPrompt(event) {
  event.preventDefault();
  var userInput = document.getElementById("floatingInputValue").value;
  // console.log(userInput)
  var e = document.getElementById("gender");
  var value = e.value;
  // console.log(value)


  // modal will replace the window alert
  if (userInput === "") { 
    alert('empty message')

  } else if (userInput.length < 5 ) { 
    alert('empty message')

  } else {
    OpenaiFetchAPI (userInput,value)}
}



var form = document.getElementById('form')
form.addEventListener("submit", submitPrompt);


// submitPrompt();
