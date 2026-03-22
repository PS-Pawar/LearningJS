//conditional statements


//if statement
let isRaining = true;   
if (isRaining) {
    console.log("Don't forget to take an umbrella!");
}
//if else statement

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

console.log("age is", age);



//if-else if-else statement 
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else if (score >= 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}
console.log("score is", score);



//switch statement
let day = 4;    
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");

}   
console.log("day is", day); 

// In JavaScript, conditional statements are used to perform different actions based on different conditions. The main types of conditional statements are:

// 1. if statement: Executes a block of code if a specified condition is true.

// 2. if-else statement: Executes one block of code if a specified condition is true, and another block of code if the condition is false.

// 3. else-if statement: Used to specify a new condition to test, if the first condition is false.

// 4. switch statement: Evaluates an exp

//ression and executes code based on the matching case. It is often used as an alternative to multiple if-else statements when there are many conditions to check.

// Conditional statements allow you to control the flow of your program and make decisions based on user input, variable values, or other conditions.

// Note: Always remember to include a break statement in each case of a switch statement to prevent fall-through, unless you intentionally want to execute the next case.

// Example of using conditional statements to check if a number is positive, negative, or zero
let number = -5;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
console.log("number is", number);

//ternary operator

let isEven = (number % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${number} is ${isEven}.`);