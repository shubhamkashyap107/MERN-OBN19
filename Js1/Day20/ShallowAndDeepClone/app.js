// let arr = [1,2,3,[4,5,6]]
// let copy = [...arr] // shallow copy


// copy[3].push(-1)

// console.log(arr)
// console.log(copy)


// shallow copy in objects

// let obj = {
//     name : "xyz",
//     age : 32
// }

// let copy = {
//     ...obj
// }

// console.log(obj)
// console.log(copy)

// let copy = obj

// console.log(obj)
// console.log(copy)

// copy.name = "qwertyuiop"

// console.log(obj)
// console.log(copy)







let person1 = {
    name : "Aman",
    age : 12,
    address : {
        city : "Delhi",
        country : "India"
    }
}

let person2 = {
    ...person1,
}

person2.name = "Ajay"
person2.address.city = "Pune"


console.log(person1)
console.log(person2)










