// diffrence between == and ===

// == -> compare a values ,equality operator
// === -> compare values and types ,strict operator
// "5" == "5" -> true
// "5" === "5" -> false

// solved 
function compareValues(a, b) {
  console.log("a == b:", a == b);   // Loose equality (type conversion allowed)
  console.log("a === b:", a === b); // Strict equality (no type conversion)
}

compareValues(5, '5');       // true, false
compareValues(0, false);     // true, false
compareValues(null, undefined); // true, false
compareValues('hello', 'hello'); // true, true
compareValues(1, true);      // true, false
