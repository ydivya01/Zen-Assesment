Day -4: Functions Task  

1. How  to compare two JSON have the same properties without order?


let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };


console.log(`${obj1.name === obj2.name ? true : false}`);
console.log(`${obj1.age === obj2.age ? true : false}`);



2. Use the rest countries’ API URL -> https:/restcountries.com/v3.1/all and display all the country flags in the console.


let jsonfile = new XMLHttpRequest();
// configure request
jsonfile.open("GET", "https://restcountries.com/v3.1/all");
// send over the network
jsonfile.send();


jsonfile.onload = function () {
  if (jsonfile.status == 200) {
    let users = JSON.parse(jsonfile.response);
    users.forEach((value) => {
      if (value.flag) {
        console.log(value.flag);
      } else {
        console.log(`No, the flag is not available for this ${value.name.official} country`);
      }
    });
  } else {
    console.log(xhr.status);
  }
};



3. Use the same rest countries and print all countries names, regions, sub-region and populations.


users.forEach((value) => {
      if (value.name && value.region && value.subregion && value.population) {
        console.log(
          `Country Name:${value.name.official}
           Region:${value.region}
           Sub-region:${value.subregion}
           population:${value.population}`
        );
      } else {
        console.log(
          `some data is missing in this ${value.name.official} country`
        );
      }
    });



Median tasks:


// Task 1: Simple Programs todo for variables


// 1.Declare four variables without assigning values and print them in console.
var a;
let b;
let hello;
let result;
console.log(a, b, hello, result);


//2. How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");


var myvar = 1;
console.log(myvar);


// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
const firstName = "Divya";
const lastName = "Yadav";
const maritalStatus = "Unmarried";
const country = "india";
const age = 27;


// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
const [firstName1, lastName1, maritalStatus1, country1, age1] = [
  "Divya",
  "Yadav",
  "Unmarried",
  "india",
  27,
];


// 5. Declare variables and assign string, boolean, undefined and null data types
const s = "string";
const boo = true;
let undef;
const number = null;


// I am 27 years old.
// You are 30 years old.
// 6. Convert the string to integer
//parseInt()
// Number()
// Plus sign(+)
let iAm = "I am 27 years old";
let you = "You are 30 years old";
let par = parseInt(iAm);
let num = Number(you);
let plus = +iAm;


// 7. Write 6 statement which provide truthy & falsey values.
const x = 5;
//truthy statement
if (x === 5) {
}
if (25 % 5 === 0) {
}
if (true) {
}
//falsy statement
if (x !== 5) {
}
if (25 / 5 === 0) {
}
if (false) {
}


// Task 2: Simple Programs todo for Operators
//1. Square of a number
const newNum = 2;
console.log(newNum * newNum);


// 2.Swapping 2 numbers
let swap1 = 5;
let swap2 = 10;
[swap1, swap2] = [swap2, swap1];
console.log(swap1, swap2);


// 3.Addition of 3 numbers
const [u, v, z] = [1, 5, 9];
sum = u + v + z;
console.log(sum);


// 4.Celsius to Fahrenheit conversion
const celsius = 50;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);


// 5.Meter to miles
const meter = 250;
const miles = meter * 0.000621;
console.log(miles);


// 6.Pounds to kg
const pounds = 100;
const kilo = pounds * 0.4536;
console.log(kilo);


// 7.Calculate Batting Average
const scoredRuns = 12562;
const timesOut = 183;
const battingAverage = scoredRuns / timesOut;
console.log(battingAverage.toFixed(2));


// 8.Calculate five test scores and print their average
const [s1, s2, s3, s4, s5] = [125, 55, 67, 89, 98];
const totalScore = s1 + s2 + s3 + s4 + s5;
const average = totalScore / 5;
console.log(Math.round(average));


// 9.Power of any number x ^ y.
const num9 = 2;
const powerOfAnyNum = 8;
console.log(num9 ** powerOfAnyNum);


// 10.Calculate Simple Interest (SI = (pnr)/ 100)
const principle = 100000;
const noperiod = 1; //year
const rateOfInterest = 24; //interest rate per year
const simpleInterest = (principle * noperiod * rateOfInterest) / 100;
console.log(Math.round(simpleInterest));


// 11.Calculate area of an equilateral triangle = (squarerootof(3)/4)*(a**2)
const baseA = 4;
const areaOfEquilateralTriangle = 3 ** 0.5 * (0.25 * baseA ** 2);
console.log(areaOfEquilateralTriangle.toFixed(2));


// 12.Area Of Isosceles Triangle = (base*height)/2
const baseIso = 12;
const heightIso = 17;
const areaOfIsoscelesTriangle = 0.5 * baseIso * heightIso;
console.log(areaOfIsoscelesTriangle);


// 13.Volume Of Sphere = (4/3) πr**3
const radius = 4;
const volumeOfSquare = (4 / 3) * Math.PI * radius ** 3;
console.log(volumeOfSquare.toFixed(2));


// 14.Volume Of Prism = base * height
const basePrism = 3;
const heightPrism = 7;
const volumeOfPrism = basePrism * heightPrism;
console.log(volumeOfPrism);


// 15.Find area of a triangle. = (base*height)*(1/2)
const baseTriangle = 4;
const heightTriangle = 12;
const areaOfTriangle = 0.5 * baseTriangle * heightTriangle;
console.log(areaOfTriangle);


// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product
const actualCost = 2000;
const soldCost = 1600;
const discount = ((actualCost - soldCost) * 100) / actualCost;
console.log(discount);


// 17. Given their radius of a circle and find its diameter, circumference and area.
//Diameter of a Circle = 2 * radius , Circumference of a Circle = 2 * π * radius,Area of a circle is: A =π * radius **2
const radiusOfCircle = 20;
const diameterOfCircle = 2 * radiusOfCircle;
const circumferenceOfCircle = 2 * Math.PI * radiusOfCircle;
const areaOfCircle = Math.PI * radiusOfCircle ** 2;
console.log(`Diameter of a circle  ${diameterOfCircle}
circumference of a circle  ${circumferenceOfCircle.toFixed(2)}
Area of a circle  ${areaOfCircle.toFixed(2)}`);


//18.  Given two numbers and perform all arithmetic operations.
let [ab, cd] = [2, 4];
const addition = ab + cd;
const subtraction = ab - cd;
const multiplication = ab * cd;
const exponentiation = ab ** cd;
const division = ab / cd;
const modulus = ab % cd;
const increment = ab++;
const decrement = cd--;


// 19. Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log(`*****
*****
*****
*****
*****`);


// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month.
// Calculate the total energy bill of that consumer if per unit rate is 10?
const consumePerHour = 100;
const daysInMonth = 30;
const electricityBill = (consumePerHour * daysInMonth * 24 * 10) / 1000; //*24 tto convert the days into hours.
console.log(electricityBill);


// Program To Calculate CGPA = sum of total grade / no of subject
const [g1, g2, g3, g4, g5] = [9, 8, 9, 7, 8];
const cgpa = (g1 + g2 + g3 + g4 + g5) / 5;
console.log(cgpa);


// Task 3: Simple Programs todo for Condition , Looping and Arrays
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (let i = 1; i <= 7; i++) console.log("#".repeat(i));
// 2. Iterate through the string array and print it contents


//       var strArray= ["<option>Jazz</option>",
//       ,"<option>Blues</option>",
//       ,"<option>New Age</option>",
//       ,"<option>Classical</option>",
//       ,"<option>Opera</option>"]
var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];
strArray.forEach((arr) => {
  console.log(arr);
});
// Arrays:


// var myarray=[11,22,33,44,55]


// write a code to count the elements in the array . Don’t use length property


var myarray = [11, 22, 33, 44, 55];
var k = 0;
myarray.forEach((arr, value) => {
  k = value;
});
console.log(k + 1);
// — — — — — — — — — — — — — — -
// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.


// let foods=[]
let foods = [
  "dosa",
  "idly",
  "poori",
  "pongal",
  "sambar rice",
  "curd rice",
  "biriyani",
  "chapathi",
  "porata",
  "vadai",
  "bajji",
  "leg piece",
  "lollipop",
  "potato fries",
  "chilli",
  "lemon rice",
  "mango rice",
  "puli rice",
  "cocunut rice",
  "payasam",
];


// — — — — — — — — — — — — — — — -
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log(foods[4]);


// Find the length of your foods array


console.log(foods.length);
// — — — — — — — — — — — — — — — -
// Starting from the existing friends variable below, change the element that is currently 'Mari' to 'Munnabai'.


let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];


function dataHandling(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Mari") {
      input[i] = "Munnabai";
      console.log(input);
    }
  }
}


dataHandling(friends);
console.log("*************");
// — — — — — — — — — — — — — — — -
// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.


const friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];


function dataHandling1(input) {
  for (let i = 0; input[i] !== "CaptianAmerica"; i++) {
    console.log(input[i]);
  }
}
dataHandling1(friends1);


// — — — — — — — — — — — — — — — -
// Find the person is ur friend or not.


const friends2 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling2(input, name) {
  let present = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Jeff") {
      present = 1;
    }
  }
  return present === 0 ? "No" : "yes";
}


let found = dataHandling2(friends2, "Jeff");


console.log(found);


// — — — — — — — — — — — — — — — -
// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.


var friends3 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
var friends4 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];


function dataHandling3(input) {
  let allFriends = input.sort();
  console.log(allFriends);
}


dataHandling3([...friends3, ...friends4]);


// — — — — — — — — — — — — — — — -


// Get the first item, the middle item and the last item of the array.
let friends5 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
console.log(
  friends5[0],
  "two friends are in middle",
  friends5[2],
  friends5[3],
  friends5[friends5.length - 1]
);
// 2. Add your name to the end of the friends array, and add another name to beginning.
friends5.push("Mohan");
friends5.unshift("Batman");
console.log(friends5);


// 3. Add Mr or Ms to the names in the friends array.
let friends6 = [...friends5];
for (let i = 0; i < friends6.length; i++) {
  if (
    friends6[i] === "Mari" ||
    friends6[i] === "MaryJane" ||
    friends6[i] === "Munnabai"
  ) {
    friends6[i] = "Ms." + friends6[i];
  } else {
    friends6[i] = "Mr." + friends6[i];
  }
}
console.log(friends6);


// 4. Concat all the names the friends array and return as comma ',' seperated string.
console.log(friends5.join(","));


// 5. Find the friends names who has letter ‘a’ and return the list.
let friendsWithA = [];
for (let i = 0; i < friends5.length; i++) {
  for (let j = 0; j < friends5[i].length; j++) {
    if (friends5[i][j] === "a") {
      friendsWithA.push(friends5[i]);
      break;
    }
  }
}
console.log(friendsWithA);


// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let averagelength = 0;
for (let i = 0; i < friends5.length; i++) {
  console.log("length of the ", friends5[i], "is ", friends5[i].length);
  averagelength += friends5[i].length;
}


console.log("Average length is ", Math.round(averagelength / friends5.length));


// 7. Find the names and return the list starting with letter M.
let startWithM = [];
for (let i = 0; i < friends5.length; i++) {
  if (friends5[i].charAt(0) === "M") {
    startWithM.push(friends5[i]);
  }
}
console.log(startWithM);


// 8. Find the name with max characters and return the name.
let lengthOfFriends = [];
for (let i = 0; i < friends5.length; i++) {
  lengthOfFriends.push(friends5[i].length);
}


console.log(friends5[lengthOfFriends.indexOf(Math.max(...lengthOfFriends))]);
//here there is only one big charactered name is present so this is written in shorter manner.


// 9. Find the name with min characters and return the name.
let minLengthFriends = [];
let lengthOfMin = Math.min(...lengthOfFriends);
let hhhhh = lengthOfFriends.map((arr, value) => {
  if (arr === lengthOfMin) {
    minLengthFriends.push(friends5[value]);
  }
});
console.log(minLengthFriends);


// — — — — — — — — — — — — — — — -


// Find the average in the array below.
// Make sure you add only the numbers and do avg.


const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];
let onlyNumbers = 0;
for (let i = 0; i < friendsInfo.length; i++) {
  if (Number.isInteger(friendsInfo[i])) onlyNumbers += friendsInfo[i];
}
console.log(onlyNumbers);


// — — — — — — — — — — — — — — — -
// Print the contents of the input variable


var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling6(input) {
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
dataHandling6(input);


// — — — — — — — — — — — — — — — -


// Objects:


// What the output


//myobject = { 1: one, '11': 1, 'name': "arun" }; //here we cant able to use number as a key, it stops here.
// console.log(myobject.['11']); // 1
// console.log(myobject.name); // arun
// Add a new key value pair to myobject
// key : ten
// value : ten


myobject = { name: "arun" };
myobject.ten = "ten";
console.log(myobject);
// {"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.


// Write out an object literal to represent the data below.
const company = {
  companyName: "Guvi",
  name: " Geek",
  no: 6,
  location: "IIT-M RP",
  city: "Chennai",
};
console.log(Object.values(company).join(","));
// Guvi, Geek, 6, IIT-M RP,Chennai.



