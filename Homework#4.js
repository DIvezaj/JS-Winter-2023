/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */

let sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let replaced = sentence1.replace(/a/ig, 'Queen and King');
console.log(`\nsentence after replacing /a/ig with 'Queen and King' -> ${replaced}`);

/**
 * Q2: print the result of following in console:
 */

// 1. length of sentence2-String
let sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence2 -> ${sentence2.length}`);

//  2. does sentence3 start with 'COM' (ignoring cases)                      -> boolean
let sentence3 = "CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.";

let sentence3_UpperCase = sentence3.toUpperCase();
let pattern_UpperCase = "COM".toUpperCase();
let result = sentence3_UpperCase.startsWith(pattern_UpperCase);
console.log (`sentence3 -> ${sentence3}`);
console.log (`Sentence3 starts with "COM" (ignoring cases) -> ${result}`);

// 3. does sentence4 endsWith 'Google news' (ignoring cases)                -> boolean
let sentence4 = "CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.";

let sentence4_LowerCase = sentence4.toLowerCase();
let pattern_LowerCase = sentence4.toLowerCase();
let result2 = sentence4_LowerCase.endsWith(pattern_LowerCase);
console.log (`sentence4 -> ${sentence4}`);
console.log (`sentence4 ends with "Google News" (ignoring cases) -> ${result2}`);

// 4. does word 'from' present only once in sentence5 (ignoring cases)      -> boolean
let sentence5 = "CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.";

let sentence5_LowerCase = sentence5.toLowerCase();
let includes_from = sentence5_LowerCase.includes('from');
console.log (`sentence5 -> ${sentence5}`);
console.log (`sentence5 includes "from" (ignoring cases) -> ${includes_from}`);


// 5. the character present at second-last index in the String
let sentence6 = "CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.";

let length = sentence6.length;
let secondLastIndex = sentence6.length - 2;
let secondLastCharacter = sentence6.charAt(secondLastIndex);
console.log(`The character present at second-last index in the string "${sentence6}" is "${secondLastCharacter}".`);