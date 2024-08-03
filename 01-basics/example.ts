export {};

// Exempel 1: Försök att använda en variabel som inte har definierats
console.log(x); // ReferenceError: x is not defined

// Exempel 2: Försök att använda en funktion som inte är definierad
const result = addNumbers(2, 3); // TypeError: addNumbers is not a function

// Exempel 3: Försök att använda en variabel innan den har tilldelats ett värde
let y;
console.log(y);

// Exempel 4: Försök att använda en variabel med felaktig datatyp
const age = "30";
console.log(age + 1); // "301"

// Exempel 5: Försök att använda en variabel med felaktig datatyp (TypeScript skulle inte tillåta detta)
let firstName = "Alice";
firstName = 1337;  // Error: Type '1337' is not assignable to type 'string'
