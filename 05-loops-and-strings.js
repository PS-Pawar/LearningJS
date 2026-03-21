//loops in javascript 
// loops are used to excute apart of code multiple times

// for loop 
for (let count = 0; count <= 100; count++) {
    console.log("pavanjs");
}
console.log("for loop ended");

// calculate the sum of 1 to 5

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;//answer will be 15
}
console.log("the sum of 1 to 5 is " + sum);

// while loop
let count = 0;
while (count <= 100) {
    console.log("pavanjs");
    count++;
}
console.log("while loop ended");
// calculate the sum of 1 to 5 using while loop
let sum1 = 0;
let i = 1;
while (i <= 5) {
    sum1 = sum1 + i;
    i++;
}
console.log("the sum of 1 to 5 using while loop is " + sum1);

//do-while-loop

let number = 0;
do {
    console.log("pavanjs");
    number++;
} while (number <= 100);

// calculate the sum of 1 to 5 using do-while loop
let sum2 = 0;
let j = 0;
do {
    console.log("the sum of 1 to 5 using do-while loop is " + sum2);//answer will be 10
    sum2 = sum2 + j;
    j++;
} while(j <= 5)

// for of loop
let name = "pavanjs";   
for (let char of name) {
    console.log(char);
}

// for in loop
let person = {
    name: "pavan",
    age: 21,
    city: "Pune"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " " + j);
    }
} // this will print all the combinations of i and j from 1 to 3

// break and continue statements
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // skip the rest of the code in this iteration
    }
    if (i === 8) {
        break; // exit the loop
    }
    console.log(i);
}// this will print 1, 2, 3, 4, 6, 7 and then exit the loop when i is 8

// infinite loop
// while (true) {
//     console.log("This is an infinite loop");
// } // this will keep printing "This is an infinite loop" forever until you stop it manually

//strings in javascript
let str = "Hello, World!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.indexOf("o"));
console.log(str.slice(0, 5));
console.log(str.replace("World", "JavaScript")); 



// template literals
let name1 = "pavan";
let age1 = 21;
let city1 = "Pune";
let message = `My name is ${name1}, I am ${age1} years old and I live in ${city1}.`;
console.log(message);// this will print "My name is pavan, I am 21 years old and I live in Pune."

// string concatenation
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // this will print "Hello World"   

// string interpolation
let name2 = "pavan";
let age2 = 21;
let city2 = "Pune";
let message1 = `My name is ${name2}, I am ${age2} years old and I live in ${city2}.`;
console.log(message1); // this will print "My name is pavan, I am 21 years old and I live in Pune."

// string methods
let str3 = "Hello, World!";
console.log(str3.charAt(0));// this will print "H"
console.log(str3.charCodeAt(0));// this will print 72 (the ASCII code for "H")
console.log(str3.concat(" How are you?")); // this will print "Hello, World! How are you?"
console.log(str3.endsWith("!"));        // this will print true
console.log(str3.startsWith("Hello")); // this will print true
console.log(str3.trim()); // this will print "Hello, World!" without any leading or trailing whitespace 

// string comparison
let str4 = "Hello";
let str5 = "hello";
console.log(str4 === str5); // this will print false because the case is different
console.log(str4.toLowerCase() === str5.toLowerCase()); // this will print true because we are comparing the lowercase versions of the strings

// string splitting and joining
let str6 = "Hello, World!";
let arr = str6.split(", "); // this will create an array ["Hello", "World!"]
console.log(arr);
let str7 = arr.join(" - "); // this will join the array elements with " - " and create a new string "Hello - World!"
console.log(str7); // this will print "Hello - World!"

// string repetition
let str8 = "Hello";
let repeatedStr = str8.repeat(3); // this will create a new string "HelloHelloHello"
console.log(repeatedStr); // this will print "HelloHelloHello"

// string padding
let str9 = "5";
let paddedStr = str9.padStart(3, "0");  
console.log(paddedStr); // this will print "005" because we are padding the string with "0" until it reaches a length of 3
let paddedStr2 = str9.padEnd(3, "0");
console.log(paddedStr2); // this will print "500" because we are padding the string with "0" at the end until it reaches a length of 3

// string slicing
let str10 = "Hello, World!";
let slicedStr = str10.slice(0, 5);  // this will create a new string "Hello" by slicing the original string from index 0 to index 5 (not including index 5)
console.log(slicedStr); 

// string substring
let str11 = "Hello, World!";
let substringStr = str11.substring(0, 5); // this will create a new string "Hello" by extracting the characters from index 0 to index 5 (not including index 5)
console.log(substringStr);

// string substring
let str12 = "Hello, World!";
let substrStr = str12.substr(0, 5); // this will create a new string "Hello" by extracting the characters from index 0 and taking 5 characters
console.log(substrStr);

// string search
let str13 = "Hello, World!";
let searchIndex = str13.search("World"); // this will return the index of the first occurrence of "World" in the string, which is 7
console.log(searchIndex);   

// string match
let str14 = "Hello, World!";
let matches = str14.match(/o/g);    

// this will return an array of all the occurrences of "o" in the string, which is ["o", "o"]
console.log(matches);

