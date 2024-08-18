//way 1 to decalre
const friends = ["Michael", "steven", "peter"];
console.log(friends);

//way 2
const years = new Array(1991, 1992, 1993);
console.log(years);
console.log(years[0]);
console.log(years.length);
console.log(years[years.length - 1]);

//inserting an element at end of the arrays
years.push(1997);
console.log(years);

//inserting an element at begining of the array, it also returns teh lenght of the array
const newlenght = years.unshift(1987);
console.log(years);
console.log(newlenght);

//remove last element from an array using pop()
years.pop();
console.log(years);

//remove first element from the array using shift()
years.shift();
console.log(years);

//to check if an element exist in the array
console.log(friends.includes("Steven"));
