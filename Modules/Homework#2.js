let fTemp = 47;

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}°F is equal to ${fTempIntoCTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`${fTemp}°F is equal to ${fTempIntoKTemp}°K`);

let ctemp = 20;

// C -> F
// T(°F) = (T(°C) * 1.8)+ 32
let ctempintoftemp = (ctemp * 1.8) + 32;
console.log(`${ctemp}°C is equal to ${ctempintoftemp}°F`);

// C -> K
// T(K) = (T(°C) + 273.15)
let ctempintoktemp = (ctemp + 273.15)
console.log(`${ctemp}°C is equal to ${ctempintoktemp}K`)
 
let ktemp = 300;

// K -> F
// T(°F) = (T(K) * 1.8) - 459.67
let ktempintoftemp = (ktemp * 1.8) - 459.67;
console.log(`${ktemp}K is equal to ${ktempintoftemp}K`)

// K -> C
// T(°C) = (T(K) - 273.15)
let ktempintoctemp = (ktemp - 273.15)
console.log (`${ktemp}K is equal to ${ktempintoctemp}°C`);