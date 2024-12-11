// Function Statement/Declaration
function add(a, b) {
    return a + b
}

// Function Expression
const subtract = function (a, b) {
    return a - b
}

// Arrow Function


// Anonymous Function
/*
function (a, b) {
    return a + b
}
*/


// IIFE (Immediately Invoked Function Expression)
(function (a, b) {
    return a + b
})

// First Class Functions- Functions can be treated like any other variable
const multiply = function (a, b) {
    return a * b
}

const doubleMultiply = function (fn, a, b) {
    return fn(a, b) * 2
}

const result = doubleMultiply(multiply, 2, 3)
console.log(result)
