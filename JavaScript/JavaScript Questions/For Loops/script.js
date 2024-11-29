// Question No.1
// Write a Program to display the message "Hello World" 5 times in your browser using for loops

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello World", i);
// }

// Question No.2
// Write a program to print numeric counting from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Question No. 3
// Write a program to print multiplication table of any number using for loops. Table number & length should be taken as an input from User.

// let table = +prompt("Enter Your Table");
// let length = +prompt("Enter Table length");

// console.log(`Table of ===> ${table}`);

// for (let i = 0; i <= length; i++) {
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// Question No. 4
// You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// let A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];

// for (let i = 0; i < A.length; i++) {
//     console.log(A[i]);
// }

// Question No.5
// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let j = 0; j < fruits.length; j++) {
//     console.log(`Element at index ${j} is ${fruits[j]}`);
// }

// Question No.6
//Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.

// const No = prompt("Enter the number of items in the array: ");
// const arr = [];
// for (let i = 0; i < No; i++) {
//     arr[i] = prompt("Enter item " + (i + 1) + ": ");
// }
// console.log(arr);

// console.log(`Number of items: ${No}`);
// console.log(`Items:`);
// for (let j = 0; j < arr.length; j++) {
//     console.log(`${arr[j]}`);
// }

// Question No.7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Enter the item you are looking for:");
// let itemFound = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         itemFound = true;
//         break;
//     }
// }
// if (itemFound) {
//     alert("The item " + userInput + " is found in the list.");
// } else {
//     alert("The item " + userInput + " is not found in the list.");
// }



// Question No.8
// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largest);

// Question No.9
// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallest);

// Question No.10
// Write a program to identify the largest & the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0]; 
// let largest = A[0]; 

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
//     if (A[i] > largest) {
//         largest = A[i]; 
//     }
// }
// console.log("The smallest number in the array is: " + smallest);
// console.log("The largest number in the array is: " + largest);

// Question No.10
// Write a program to print multiples of 5 ranging 1 to 100

// let arr = [];

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

//vQuestion No.11
// You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for loops.

// let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < A[i].length; i++) {
//     console.log(A[i]);
// }

// Question No.12
// Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.

// let num = +prompt("Enter a positive number:");

// if (num <= 0) {
//     console.log("Invalid input or not a positive number.");
// } else {
//     for (let i = num; i > 0; i -= 0.5) {
//         console.log(i);
//     }
// }

// Question No.13
// The even/odd reporter Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// Question No.13
// Write a program to calculate the product of the odd integers from 1 to 7.

// let product = 1;
// for (let i = 1; i <= 7; i += 2) {
//     product *= i;
// }
// console.log("The product of the odd integers from 1 to 7 is: " + product);


// Question No.14
// Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7
/* *******
   ******
   *****
   ****
   *** */

// for (let i = 7; i > 0; i--) {
//     let stars = "";
//     for (let j = 0; j < i; j++) {
//         stars += "*";
//     }
//     console.log(stars);
// }

// Question No.15
/* Write a program to create the following patterns in your
browser. Take number of lines as an input.

a. *****
   *****
   *****
   *****

b. *
   **
   ***
   ****
   *****

c. *****
   ****
   ***
   **
   * 
*/


