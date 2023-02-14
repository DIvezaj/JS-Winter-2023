console.log('\nQ1');

const arr1 = [21, 32, 12, 43, 45, 65, 12];
const num1 = 12;
let arr1Result = [];

for (let x = 0; x < arr1.length - 1; x++) {
    if (arr1[x] !== num1) {
        arr1Result.push(arr1[x]);
    }
}

console.log(arr1);
console.log(arr1Result);


console.log('\nQ2:');

const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]

let total = 0;

for (let x = 0; x < accounts.length; x++) {
    total = total + accounts[x].balance
}

console.log(`Total of all balances in the accounts array: ${total}`);


console.log('\nQ3');

const arr3 = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
let arr3Result;

let baseballIndexes = [];

for (let x = 0; x < arr3.length - 1; x++) {
  if (arr3[x].toLowerCase() === 'baseball') {
    baseballIndexes.push(x);
    
    if (baseballIndexes.length < 2) {
        arr3Result = -1;
      } else {
        arr3Result = baseballIndexes[1];
      }
    }
}

console.log(arr3);
console.log(`the index of second-occurrence of 'baSeBalL' (ignoring cases) in the arr3-array : ${arr3Result}`);