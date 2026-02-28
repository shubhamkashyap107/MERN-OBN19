function sum(...nums) 
{
    let sum = 0
    for(let item of nums)
    {
        sum += item
    }
    console.log(sum)
}

function tellPosition(first, second, third, ...extras)
{
    console.log(`First is ${first}`)
    console.log(`Second is ${second}`)
    console.log(`Third is ${third}`)
    extras.length > 0 && console.log(`Consolation ${extras.join(", ")}`)
}


// tellPosition("Amit", "Bhanu", "Ashish", "Ashish")



// sum()
// let n = 22
// let arr = ["Even", "Odd"]
// console.log(arr[n % 2])



// let arr = [1,2,3,4,5,6,7,8,9,10]
// const[a,b,c, ...extras] = arr

// console.log(a,b,c)
// console.log(extras)


// destructuring an object

// let obj = {
//     name : "Xyz",
//     age : 22,
//     city : "Delhi"
// }

// console.log(obj.name, obj.age, obj.city)
// console.log(obj["name"], obj["age"], obj["city"])
// const{name : naam, age : Umar, city : jagah, address} = obj
// console.log(naam, Umar, jagah, address)

// const{name, ...something} = obj
// console.log(name)
// console.log(something)




// SPREAD OPERATOR


// let arr = [1,2,3,4,5,6,]
// console.log(...arr)

// let a1 = [1,2,3,4,5]
// let a2 = [11,12,13,14,15]

// let ans = a1.concat(a2)
// let ans = a2.concat(a1)
// let ans = [...a1, ...a2]
// let ans = [...a2, ...a1]
// let ans = [-1,-2,-3,...a1,...a2,100,101,102]
// let copy = [..."qwertyui"]

// console.log(copy)



let obj1 = {
    name : "xyz",
    age : 32,
    city : "Delhi",
    sayHi : () => {
        console.log("OK")
    }
}

let obj2 = {
    address : "qwert",
    country : "India",
    car : "BMW",
    name : "abc"
}

let obj3 = {
    ...obj1,
    ...obj2,
    color : "red",
    language : "JS",
    name : "Shubham"
}

let copy = {
    ...obj1
}

console.log(obj3)
console.log(copy)