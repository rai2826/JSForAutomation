// Variable is an identifier/placeholder to stores data
// Syntax - var|let|const {variable name}= value
// Declare a variable to be a var,let or const and assign a value 

let toprint="Hello World"
console.log(toprint);

//Variable Rules ====================================================
// Variable name should start with letter , Underscore, dollar sign
// System reserved keywords can't be used
//Variable names are case sensitive, javascript itself is case sensitive 
// We cant have variable for other types 
// Multiple variables can be declared in single line
//when you just declare a variable , the data type will be undefined


// var,let and constant ============================================

// var- declares a variable ,optionally initilaize it to a value, this was the only option before ES6
// let- declares a block scoped , local variable - preffered wherever possible 
//const declares a block scoped , read only named constant

//const variable must be intilaised with a value, const variable can not be re-assigned, const will be captlised 

let val=10
console.log(val);

val="Hey i am dynamic typed"
console.log(val);