# Stylist.Ai

## Description

We are tasked with using a minimum of two different API Keys to integrate into a web based application. Collectively, we chose to work with OpenAi and Google APIs to generate the best possible response for a given request.

The premise of the web application is an AI stylist that provides clothing, shoes, and/or accessory information to Google's API to being a render of examples for the user.
The examples match the requested prompt (for male, female, or gender neutral requests). The user can submit a prompt that specifies the location or event of interest to apply to the items returned.

OpenAi, through Davinci-003 will take the user prompt, combined with the developer's prompt to generate 3 pieces of information that it will send to Google's API. Google's API will read the items generated from the OpenAi prompt and return them in a second page of results specific to the request. The second page of (results) will contain three carousels that provide three options to the user. The three options can be parsed by the user to select their favorite options or begin the search again.
If the user favorites any of the options, they will be saved in Local storage, and added to "PastStyles" for future reference; however, if the user begins the search again- they are redirected back to the opening page to submit a new search request.

Our team of developers created this application with the idea of helping the target user be able to decide on an outfit idea for any occasion whenver the user may have no clue where to begin. The user is in need of an outfit idea but may not be able to go get a personal shopper or stylist--- This is where the help of Sylist.AI comes in.
Stylist.Ai provides the services of an "at-home" or "on-the-go" stylist to any user in need of styling services.

Stylist.AI solves the need to hire outside parties to style an outfit, shortens search requests for the user, and can even link the user to a desired item for future purchase. 

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Google Scraper API (https://dashboard.scraperapi.com/)
OpenAI API (https://platform.openai.com/overview)
Bootstrap (https://getbootstrap.com/docs/5.1/getting-started/introduction/)

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
