
// Class - Movie
// 1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(title) {
    if (this.rating === "PG") {
      return this.title;
    }
  }
}

const movie1 = new Movie("Casino Royale", "Eon Productions", "PG");
console.log(movie1.getPG("Casino Royale"));
-------------------------------------------------------------
// Circle - Class
// 2.Convert the UML diagram to Typescript class. - use number for double

class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  tostring() {
    return this.radius, this.color;
  }
  getArea() {
    let area = Math.PI * this.radius ** 2;
    return area;
  }
  getCircumference() {
    let circumference = 2 * Math.PI * this.radius;
    return circumference;
  }
}

const circle1 = new Circle();
console.log(circle1.getArea());
circle1.setRadius(4);
console.log(circle1);
-------------------------------------------------------------
//3.Write a “person” class to hold all the details.
class Person {
  constructor(name, age, gender, bloodGroup) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.bloodGroup = bloodGroup;
  }
  getDetails() {
    return `    Name:${this.name}, 
    Age:${this.age}, 
    Gender:${this.gender}
    Blood Group:${this.bloodGroup}`;
  }
}

const person1 = new Person("Divya", 27, "Female", "O+");
console.log(person1.getDetails());


-------------------------------------------------------------




//4. write a class to calculate the UBER price
class UberPrice {
  constructor(kilometer, time = "Afternoon") {
    // time = Morning, Afternoon,Night
    this.kilometer = kilometer;
    this.time = time;
  }
  priceCalculate() {
    let bookingPrice = 30;
    let pricePerKM = 12;
    if (this.time === "Afternoon") {
      pricePerKM = 8;
    }
    return bookingPrice + pricePerKM * this.kilometer;
  }
}

const uberPrice1 = new UberPrice(10);
console.log(uberPrice1.priceCalculate());
-------------------------------------------------------------
//ARRAY METHODS
//Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).

let jsonfile = new XMLHttpRequest();
jsonfile.open("GET", "https://restcountries.com/v3.1/all");
jsonfile.send();
jsonfile.onload = function () {
  if (jsonfile.status == 200) {
    let users = JSON.parse(jsonfile.response);

    //a. Get all the countries from the Asia continent /region using the Filter function
    let allAsiaCountry = users.filter((arr) => arr.region === "Asia");
    console.log(allAsiaCountry);

    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    let below2lakh = users.filter((arr) => arr.population < 200000);
    console.log(below2lakh);

    // c. Print the following details name, capital, flag using forEach function
    let details = users.forEach((arr) => {
      console.log(
        `Name: ${arr.name.official}, Capital:${arr.capital},  flag:${arr.flag}`
      );
    });

    //d.Print the total population of countries using reduce function
    let totalPopulation = users.reduce((a, b) => a + b.population, 0);
    console.log("Total Population is ", totalPopulation);

    //e.Print the country which uses US Dollars as currency
    let usDollarUsingCountry = users.forEach((arr) => {
      if (arr.currencies?.USD) {
        console.log(arr.name);
      }
    });
  } else console.log("not getting data");
};
-------------------------------------------------------------

