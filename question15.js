//  1. Function Declaration
// Syntax: function name() { ... }

// Hoisted to the top of their scope.

// javascript
// Copy
// Edit
// greet(); //  Works because it's hoisted

function greet() {
  console.log("Hello from function declaration");
}

//  2. Function Expression
// Syntax: const name = function() { ... }; or let name = function() { ... };

// Not hoisted — only the variable declaration is hoisted.

// Calling it before definition results in an error.

// javascript
// Copy
// Edit
// sayHi(); // Error: sayHi is not a function

const sayHi = function() {
  console.log("Hello from function expression");
};
