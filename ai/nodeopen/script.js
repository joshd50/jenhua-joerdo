import { config } from "dotenv"
config()  

import { Configuration, OpenAIApi } from "openai";
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

openai.createChatCompletion ({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "system", content: "You are a personal shopper and stylist." },
        { role: "user", content: "I need outfit inpsiration." },
        { role: "assistant", content: "Here are three outfit ideas." }
    ],
})
.then(res => {
    console.log(res.data.choices);
})
