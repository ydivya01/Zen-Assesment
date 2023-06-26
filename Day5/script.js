let arr = [4, 5, 556, 37, 29, 5, 67, 763, 556, 2374, 67, 2734, 34, 38, 2]
let str = ["DIVYA", "YADAV"]

//Question 1
let odd = function (num) {
    if (num % 2 !== 0) {
        console.log(`${num} is odd number`)
    }
}


//Question 2 

let capital = function (value) {
    console.log(value.toUpperCase())
}


//Question 3

let sum = function (arr) {
    let total = 0
    arr.forEach(value => {
        total += value
    })
    console.log(total)
}


// Question 4

let checkPrime = function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
        else {
            isPrime = true;
        }
    }
    if (isPrime) {
        console.log(`${num} is prime number`)
    }
    else {
        console.log("NOT a prime number")
    }
}

//Question 5

let checkPalindromes = function (arr) {
    arr.forEach(value => {
        if (value.split('').reverse().join('') == value) {
            console.log("Palindromes")
        }
        else {
            console.log("Not Palindromes")
        }
    })
}

//Question 7
// [1,2,3,4,3,6,72,2,2]
let removeDuplicates = function (arr) {
    let newArr = [];
    arr.forEach(value => {
        if (newArr.includes(value)) {
            return false
        }

        else {
            newArr.push(value)
        }
    }
    )
    console.log(newArr)
}



//Question 8

