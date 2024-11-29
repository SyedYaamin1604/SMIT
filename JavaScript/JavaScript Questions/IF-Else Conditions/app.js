// // Question No:1
// // Write a Program to check whether the given input number is divisible by 3 or else show a message "Number is not divisible by 3".

// Asking User for their Input
var num = +prompt("Enter your number");

// Implementing the conditon to determine whether the given input is divisible by 3 or not.
if (num % 3 === 0) {
    console.log("Your number is divisible by 3");
} else {
    console.log("Your number is not divisible by 3");
}


// // Question No:2
// // Write a Program that checks whether the given input is even number or an odd number".

// Asking the User for their Input
var num = +prompt("Input your Number");

// Implementing the conditon to determine whether the given input is Even or Odd
if (num % 2 === 0) {
    console.log("Your given number is Even");
} else {
    console.log("Your given number is Odd");
}


// // Question No:3
// // Write an if/else statement with the following condition:"
// // If the variable age is greater than 18, output "Old Enough", otherwise output "Too Young"

// Asking Input from the user
var age = +prompt("Enter your Age");

// Implementing the Conditions
if (age >= 18) {
    console.log("Old Enough");
} else {
    console.log("Too Young");
}


// // Question No:4
// // Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.

// // My Name:
var myName = "Yaamin";

// // Asking user for their name:
var userName = prompt("Enter Your Name:");

// // Implementing the Condition
if (userName === myName) {
    console.log("Hello, Yaamin! Nice to meet you!!");
} else {
    console.log("Error!!!");
}


// Question No:5
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statement.

// // Taking Time Input from the user:
var timeInput = +prompt("Enter the time in 24 hours Format:");

// // Implementing If-Else Conditions
if (timeInput >= 0 && timeInput < 1200) {
    console.log("Good Morning!!");
} else if (timeInput >= 1200 && timeInput < 1700) {
    console.log("Good Afternoon!!");
} else if (timeInput >= 1700 && timeInput < 2100) {
    console.log("Good Evening!!");
} else if (timeInput >= 2100 && timeInput <= 2400) {
    console.log("Good Night!!")
} else {
    console.log("Enter Correct Time!!");
}


// Question No:6
// Write a program that
// a. Store correct password in JS Variable.
// b. Ask user to enter his/her password.
// c. Validate the two passwords:
//     i: Check if user has entered password. If not, then give message "Please enter your Password"
//    ii: Check if both passwords are same. If they are same, show message "Correct! The Password you enterd matches the original password" .Show "Incorrect Password" Otherwise.


// // Password
var password = "JS@password";

// // Asking user to enter Password
var enterPass = prompt("Enter your Password");

// // Implementing Conditions
if(enterPass === password){
    console.log("Correct! The Password you entered matches the original password");
} else{
    console.log("Incorrect Password");
}


// Question No:7
// Write a Program that adds an else statement to the following script to display "You are not Fahad"
// var firstName = "Ali";
// if (firstName === "Fahad"){
//     document.write("Hello Fahad!")
// }


var firstName = "Ali";
if (firstName === "Fahad") {
    document.write("Hello Fahad!")
} else {
    console.log("You are not Fahad!");
}


// Question No: 8
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day";
// } else
//     greeting = "Good Evening";


var greeting;
var hour = +prompt("Enter your input hour");
if(hour < 18) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}


// Question No: 9
// Write a Javascript program that accept two integers and display the larger. Also show if the two integers are equal.

// Asking User for their Input
var a = +prompt("Enter your First Integer");
var b = +prompt("Enter your Second Integer");

// Implementing the Condtions
if (a > b) {
    console.log(a + " is larger than " + b);
} else if (b > a) {
    console.log(b + " is larger than " + a);
} else {
    console.log("Both integers are equal:" + a);
}


// Question No: 10
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num = +prompt("Enter your Number");
if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}


// Question No: 11
// Ask the user what the current hours is. If the hour is between 6 and 9 a.m, tell the user, "Breakfast is served". If the hour is between 11 a.m and 1 p.m, tell the user "Time for lunch". If the hour is between 5 and 8 p.m, tell the user "It's Dinner time" For any other hours, tell the hours "Sorry, you'll have to wait, or go get a snack".

// Asking User for their Current Hours
var currentHours = +prompt("What is the current Hour");

// // Implementing the If-Else Conditions
if (currentHours >= 6 && currentHours <= 9) {
    console.log("Breakfast is Served");
} else if (currentHours >= 11 && currentHours <= 13) {
    console.log("Time for Lunch");
} else if (currentHours >= 17 && currentHours <= 20) {
    console.log("Its's Dinner Time");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack");
}


// Question No: 12
// Write a program that stores value in a variable & tell whether the type of that variable is a "number","string","boolean" or "undefined".



// Question No: 13
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// Asking User for Input any Single character
var character = prompt("Enter only single character");

// Implementing the Condition
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "A" || character === "E" || character === "I" || character === "O" || character === "u"){
    console.log("It is Vowell");
} else {
    console.log("It is not a Vowell");
}


// Question No: 14
// Choose a correct comparison operator to display "true", when,
// 10 is NOT is Equal to 8.

var num1 = 10;
var num2 = 8;

var result= num1 !== num2;

console.log(result);

