// if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
//     assign 25 into result1
// otherwise
//     assign 35 into result1

let sentence1 = 'go to home'
let result1 = (sentence1.length > 100 || sentence1.startsWith("go to")) ? 25 :35;
console.log (`result1 -> ${result1}`);

let sentence2 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
let result2 = (sentence2.length > 100 || sentence2.startsWith ("go to")) ? 25 : 35;
console.log(`result2 -> ${result2}`);

let sentence3 = ` `
let result3 = (sentence3.length > 100 || sentence3.startsWith ("go to")) ? 25 : 35;
console.log(`result3 -> ${result3}`);

let sentence4 = `View the latest news`
let result4 = (sentence4.length > 100 || sentence4.startsWith ("go to")) ? 25 : 35;
console.log(`result4 -> ${result4}`);

let sentence5 = 'Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.';
let result5 = (sentence5.length > 10 || sentence5.startsWith ("Go")) ? 25 : 35;
console.log(`result5 -> ${result5}`);