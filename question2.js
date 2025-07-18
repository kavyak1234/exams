// 2.hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) before code execution.

// Variable declarations (var, let, const) and function declarations are hoisted.

// Only the declarations are hoisted, not the initializations (for var).

// let and const are hoisted too, but they stay in a Temporal Dead Zone (TDZ) until the line of actual declaration.
 
// solved

var a = 10;
let b = 20;
const c = 30;

console.log(a);    
console.log(b);   
console.log(c);    

// undefined (var is hoisted)
// ReferenceError (let is hoisted but in TDZ)
// ReferenceError (const is hoisted but TDZ)