class Person{
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
}

// let arr = []
// let obj = {k : 1}
// let n = 12
// let str = "qwerty"


// let arr2 = new Array()
// let obj2 = new Object()
// let n2 = new Number(123)
// let str2 = new String(" qwe")

// console.log(arr, arr2)
// console.log(obj, obj2)
// console.log(n, n2)
// console.log(str, str2)



let arr = [1,2,3]
console.log(arr.__proto__) // double underscore proto -> dunder proto
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__.__proto__)

console.log("qwerty")
console.log("qwerty".__proto__)
console.log("qwerty".__proto__.__proto__)
console.log("qwerty".__proto__.__proto__.__proto__)

console.log(Array.prototype)
console.log(arr.hasOwnProperty(1))


let s = new Set()
let m = new Map()

console.log(s)
console.log(m)
