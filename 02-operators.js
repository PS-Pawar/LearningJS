//  Operators

let a = 20;
let b = 15;

// Arithmetic Operators
console.log("Add:", a + b);       // 35
console.log("Subtract:", a - b);  // 5
console.log("Multiply:", a * b);  // 300
console.log("Divide:", a / b);    // 1.3333
console.log("Modulus:", a % b);   // 5

// Comparison Operators
console.log("Equal:", a == b);        // false
console.log("Not Equal:", a != b);    // true
console.log("Greater than:", a > b);  // true   
console.log("Less than:", a < b);    // false
console.log("Greater than or equal:", a >= b);  // true
console.log("Less than or equal:", a <= b);    // false 


// Logical Operators
let isAdult = true;
let hasID = false;

console.log("AND:", isAdult && hasID);  // false
console.log("OR:", isAdult || hasID);   // true
console.log("NOT:", !isAdult);          // false

// Assignment Operators
let x = 10;
x += 5;  // x = x + 5
console.log("Add and Assign:", x);  // 15
x -= 3;  // x = x - 3
console.log("Subtract and Assign:", x);  // 12
x *= 2; // x = x * 2
console.log("Multiply and Assign:", x);  // 24  
x /= 4; // x = x / 4
console.log("Divide and Assign:", x);  // 6
x %= 4; // x = x % 4
console.log("Modulus and Assign:", x);  // 2  

// Increment and Decrement Operators
let count = 5;
count++;        // count = count + 1
console.log("Increment:", count);  // 6
count--;        // count = count - 1
console.log("Decrement:", count);  // 5

// Comparison Operators with Strings
let str1 = "Hello";
let str2 = "World";
console.log("Equal:", str1 == str2);        // false
console.log("Not Equal:", str1 != str2);    // true
console.log("Greater than:", str1 > str2);  // false (compares lexicographically)
console.log("Less than:", str1 < str2);    // true (compares lexicographically)

// Logical Operators with Strings
let isGreeting = true;
let isFarewell = false;   
console.log("AND:", isGreeting && isFarewell);  // false
console.log("OR:", isGreeting || isFarewell);   // true
console.log("NOT:", !isGreeting);          // false

// Assignment Operators with Strings
let greeting = "Hello";
greeting += " World";  // greeting = greeting + " World"
console.log("Add and Assign:", greeting);  // "Hello World"

// Summary of Operators
// Arithmetic Operators: +, -, *, /, %
// Comparison Operators: ==, !=, >, <, >=, <=
// Logical Operators: &&, ||, !
// Assignment Operators: =, +=, -=, *=, /=, %=
// Increment and Decrement Operators: ++, --


//note: == only checks value, while === checks both value and type.

//practice

