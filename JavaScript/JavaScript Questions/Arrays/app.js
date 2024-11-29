// Question No. 1
// Declare an empty array using JS literal notation to store student names in future.

// const studentNames = [];
// console.log(studentNames);

// Question No. 2
// Declare and initialize a strings array.

// const stringsArray = ["apple", "banana", "cherry"];
// console.log(stringsArray);


// Question No. 3
// Declare and initialize a numbers array.

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray);


// Question No. 4
// Declare and initialize a boolean array.

// const booleanArray = [true, false, true, false];
// console.log(booleanArray);

// Question No. 5
// Declare and initialize a mixed array.

// const mixedArray = ["apple", 1, true, "banana", 3.14];
// console.log(mixedArray);

// Question No. 6
// Declare and Initialize an array and store available mobile networks in Pakistan.

// const mobileNetworks = ["Zong", "Mobilink", "Ufone", "Telenor", "Warid"];
// console.log(mobileNetworks);

// Question No. 7
// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.

// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// const qualificationsList = document.querySelector("#ul");

// for (i = 0; i <= qualifications.length; i++) {
//     qualificationsList.innerHTML += `
//     <li>
//     ${qualifications[i]}
//     </li>
//     `
// }

// Question No. 8
// Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)

// const topMovies = [];
// topMovies.push("The Martian");
// topMovies.push("Star Wars: The Force Awakens");
// topMovies.push("Spectre");
// topMovies.push("The Revenant");
// topMovies.push("Mad Max: Fury Road");

// const Movies = document.querySelector("#ul");
// for (i = 0; i < topMovies.length; i++) {
//     Movies.innerHTML += `
//     <li>
//     ${topMovies[i]}
//     </li>
//     ` 
// }

// Question No. 9
// Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// Declare and initialize an array with my favorite cars
// const favoriteCars = ["Toyota Corolla", "Honda Civic", "BMW 3 Series", "Mercedes-Benz C-Class", "Audi A4"];

// const cars = document.querySelector("#ul");
// for (i = 0; i < favoriteCars.length; i++) {
//     cars.innerHTML += `<li>${favoriteCars[i]}</li>`
// }
// const carInfo = document.querySelector("#div");
// carInfo.innerHTML += `
//   <p>First index of the array: ${favoriteCars.indexOf(favoriteCars[0])}</p>
//   <p>Car at first index of the array: ${favoriteCars[0]}</p>
//   <p>Last index of the array: ${favoriteCars.length - 1}</p>
//   <p>Car at last index of the array: ${favoriteCars[favoriteCars.length - 1]}</p>
// `;

// Question No.10
//Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students.

// let studentNames = ["Ahmed", "Ali", "Hammad"];
// let studentScores = [420, 380, 450];
// let totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     let score = studentScores[i];
//     let percentage = (score / totalMarks) * 100;
//     console.log("score of " + studentNames[i] + " is " + score + " & Percentage is " + percentage );
// }

// Question No.11
// Write a program to sort the below mentioned array: 
// var fruits = [“strawberry”, “apple”, “orange”, “banana”]\

// const fruits = ["strawberry", "apple", "orange", "banana"];
// fruits.sort();
// console.log(fruits);

// Question No.12
// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// const cities = ["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"];
// const selectedCities = cities.splice(0, 2);
// console.log(cities);

// Question No. 13
// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// const arr = ["This ", "is ", "my ", "cat"];
// const sentence = arr.join("");
// console.log(sentence);

// Question No. 14
