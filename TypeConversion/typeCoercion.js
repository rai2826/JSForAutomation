// This is type Coercion where javascript automatically does this for us
let bornyear = "1991";
let currentyear = 2024;

let age = currentyear - bornyear;
console.log(age);

// 2 gets treated as String due to + operator
console.log("23" + 2 + "11");

//23 and 11 gets treated as number due to - operator
console.log("23" - 2 - "11");

//23 and 2 gets treated as number due to operator *
console.log("23" * "2");
