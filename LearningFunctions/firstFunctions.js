//function declaration
function logger() {
  console.log("hello this is a function");
}

//calling, running or invoking the function
logger();
logger();
logger();

//We can pass data to a function and also return values. like food processer which can take ingerdients and then return food

function fruitProcesseor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//store the result from return statement from calling a function in a variable
const mixedjuice = fruitProcesseor(3, 3);
console.log(mixedjuice);

//we can also write function using function expression
const calAge = function (birthyear) {
  return 2024 - birthyear;
};

const age = calAge(1987);
console.log(age);

//so 2 ways for writing a function either the declaration way or experession way
