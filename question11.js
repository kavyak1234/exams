// operators in javascript
// 1.arithematic operators -> addition ,substration,division,multiplication,modeless,
// 2.assignment operators 
// 3.comparison operators -> compare the operators 
// 4.logical operators

// solved
// Number
let num = 42;
console.log(typeof num); // "number"

// String
let str = "Hello";
console.log(typeof str); // "string"

// Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"

// Undefined
let nothing;
console.log(typeof nothing); // "undefined"

// Null (Special case)
let empty = null;
console.log(typeof empty); // "object" (This is a known JavaScript quirk)

// Object
let obj = { name: "Alice" };
console.log(typeof obj); // "object"

// Array (Also an object)
let arr = [1, 2, 3];
console.log(typeof arr); // "object" (use Array.isArray() to check for array)

// Function
let greet = function() {
  return "Hi";
};
console.log(typeof greet); // "function"

// Symbol
let sym = Symbol("id");
console.log(typeof sym); // "symbol"

// BigInt
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"
