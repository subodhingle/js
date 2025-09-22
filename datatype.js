'use strict'; // treat all js code as newer version

// alert( 3 + 3) // we are using nodejs ,not browser
/*
imp in dev readablity and simplicity should be high

there are  types of variable in js
String: Represents textual data. Example: "Hello, world!"

Number: Represents both integers and floating-point numbers. Example: 42, 3.14

BigInt: For very large integers beyond the safe limit of Number. Example: 1234567890123456789012345678901234567890n

Boolean: Represents logical values: true or false. Example: let isActive = true

Undefined: A variable that has been declared but not assigned a value. Example: let x; // x is undefined

Null: Represents an intentional absence of any value. Example: let y = null stand alone value 
undefine and null are different
undifined means value is not assigned
null means value is assigned but it is empty

Symbol: A unique and immutable identifier, often used for object keys. Example: let sym = Symbol("id")
OBJECT: A collection of properties, where each property is a key-value pair. Example: let obj = { name: "Alice", age: 30 }
*/
let name = "harshit"; // let is used to declare variable
let age = 20;
let isLoggedIn = true;
let State;

console.log(typeof undefined);
console.log(typeof null); // object
