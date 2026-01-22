let a = "abc"
let b = "xyz"

// let a = 10
// let b = 20

// let temp = a // using third variable
// a = b        // works on almost every datatype
// b = temp

a = a + b // without using third variable, works on numbers only
b = a - b
a = a - b

console.log(a)
console.log(b)