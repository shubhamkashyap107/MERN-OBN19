// const obj = {
//     name : "qwerty",
//     age : 22
// }

// Object.preventExtensions(obj)

// obj.city = "delhi"
// obj["country"] = "india"

// delete obj.age
// obj.name = "zxcvbnm"
// console.log(obj)







// const obj = {
//     name : "Shubham",
//     age : 32
// }

// Object.seal(obj)

// delete obj.name
// obj.city = "Delhi"
// obj.age = 90

// console.log(obj)


const obj = {
    name : "Shubham",
    age : 32
}

Object.freeze(obj)

delete obj.name
obj.city = "Delhi"
obj.age = 90

console.log(obj)