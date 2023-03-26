var aiResponse
var apiKey = "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"


function OpenaiFetchAPI(userInput,value) {
  console.log("Calling GPT3");
  var url = "https://api.openai.com/v1/completions";
  var bearer =
    "Bearer " + apiKey;

    var prmpt = "You are a fashion expert and your responses are exact and precise. Please create a 3 piece outfit (15 words max) for a" + value + "who needs" + userInput +". The items generated should include a random list of tops, bottoms, shoes, or accessories. If and only if  budget is stated then add dollar amount to list for each item every time.  Please limit details, only output the items generated, and do not reference their gender."

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
      temperature: .6,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      aiResponse = data["choices"][0].text
      aiResponse = aiResponse.replace(/\$/g, "under $");
      console.log(aiResponse);
      
//save reponse to local storage
      // localStorage.setItem('data',aiResponse);
      // window.location.assign("../displayJB2.html")
      
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

  var simpleModal = document.getElementById('simpleModal');
  var modalBtn = document.getElementById('modalBtn');
  var closeBtn = document.getElementsByClassName('closeBtn')[0];

  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);

  function openModal() {
    simpleModal.style.display = 'block';
  }

  function closeModal() {
    simpleModal.style.display = 'none';
  }

  function clickOutside(e) {
    if (e.target == simpleModal) {
      simpleModal.style.display = 'none';
    }
  }
  if (userInput === "" || userInput.length < 5) {
    var modalContent = document.getElementById("errorDisplay");
    modalContent.textContent += "Please add more than 5 characters to your input."; // ADDS TEXT TO P IN MODAL
    openModal(); // OPENS MODAL IF INPUT IS NULL
  } else {
    OpenaiFetchAPI(userInput, value);
    closeModal(); // HIDES MODAL ONCE SUBMISSION IS COMPLETE
  }
}


var form = document.getElementById('form')
form.addEventListener("submit", submitPrompt);


// submitPrompt();
