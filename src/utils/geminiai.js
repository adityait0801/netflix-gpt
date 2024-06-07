import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI_KEY } from "./constant";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);

export default genAI;

// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Access your API key (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(API_KEY);

// async function run() {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

// goto ai.google.dev
// click on Gemini API and create API key in Google Ai studio , store it in your constants file
// Go to Docs and Getstarted with web
// 4.follow the steps same what Akshay said import and fetch
// u need to install npm i @google/generative-ai