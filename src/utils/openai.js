import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constant';

//Here we are setting up the openai
const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
 dangerouslyAllowBrowser: true
});

export default openai;

// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
// });

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();