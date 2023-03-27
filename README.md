# Stylist.Ai

## Description

We are tasked with using a minimum of two different API Keys to integrate into a web based application. Collectively, we chose to work with OpenAi and Google APIs to generate the best possible response for a given request.

The premise of the web application is an AI stylist that provides clothing, shoes, and/or accessory information to Google's API to being a render of examples for the user.
The examples match the requested prompt (for male, female, or gender neutral requests). The user can submit a prompt that specifies the location or event of interest to apply to the items returned.

OpenAi, through Davinci-003 will take the user prompt, combined with the developer's prompt to generate 3 pieces of information that it will send to Google's API. Google's API will read the items generated from the OpenAi prompt and return them in a second page of results specific to the request. The second page of (results) will contain three carousels that provide three options to the user. The three options can be parsed by the user to select their favorite options or begin the search again.
If the user favorites any of the options, they will be saved in Local storage, and added to "PastStyles" for future reference; however, if the user begins the search again- they are redirected back to the opening page to submit a new search request.

Our team of developers created this application with the idea of helping the target user be able to decide on an outfit idea for any occasion whenever the user may have no clue where to begin. The user is in need of an outfit idea but may not be able to go get a personal shopper or stylist--- This is where the help of Sylist.AI comes in.
Stylist.Ai provides the services of an "at-home" or "on-the-go" stylist to any user in need of styling services.

Stylist.AI solves the need to hire outside parties to style an outfit, shortens search requests for the user + minimizes browser tabs open, and can even link the user to a desired item for future purchase.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Google Scraper API (https://dashboard.scraperapi.com/)

OpenAI API (https://platform.openai.com/overview)

Bootstrap (https://getbootstrap.com/docs/5.1/getting-started/introduction/)

## Usage

Homepage
![homepage](./assets/%20images/deployedhomepage.png)

Styles
![styles generator](./assets/%20images/stylesandpast.png)

WIREFRAME:
![wireframe1](./assets/%20images/wireframe1.png)
![wireframe2](./assets/%20images/wireframe2.png)
![wireframe3](./assets/%20images/wireframe3.png)
## Credits

    CodeCartel Team:

    Joshua Dadbin (https://github.com/autohome)

    Eduardo Enriquez(https://github.com/LaloEnri23)

    Joseph Baek (https://github.com/jbaek97)

    Jennifer Mejia (https://github.com/jjjgm)

OpenAI API Reference (https://platform.openai.com/docs/api-reference)

Scraper API Reference (https://www.scraperapi.com/guides/)

## License

MIT

(reference repository for license information)

[https://choosealicense.com/](https://choosealicense.com/)

## How to Contribute

If contributions are requested, please reference to the [contributing guide] below.

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

Deployment:

[Stylist.AI](https://autohome.github.io/jenhua-joerdo/)
