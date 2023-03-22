function OpenaiFetchAPI() {
  console.log("Calling GPT3");
  var url = "https://api.openai.com/v1/completions";
  var bearer =
    "Bearer " + "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";
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        model: 'text-davinci-003',
      prompt: "who is the author of to kill a mockingbird?", //enter prompt here
      max_tokens: 100,
      temperature: 1,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(typeof data);
      console.log(Object.keys(data));
      console.log(data["choices"][0].text);
    })
    .catch((error) => {
      console.log("Something bad happened " + error);
    });
}

OpenaiFetchAPI();