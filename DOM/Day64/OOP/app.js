// contructor functions

function Person(n, a, c)
{
    this.name = n
    this.age = a
    this.city = c
}


let p1 = new Person("S", 12, "Delhi")
let p2 = new Person("A", 10, "Delhi")



Person.prototype.sayHi = function()
{
    console.log(`Hello, my name is ${this.name}`)
}


// p1.sayHi()
// p2.sayHi()


















// class

class Car{
    type = "Land"
    constructor(b = "", t = "", c = "")
    {
        this.brand = b
        this.tyres = t
        this.color = c
    }

    tellAboutCar()
    {
        console.log(this.brand, this.tyres, this.color)
    }

}


let c1 = new Car("BMW", 4, "Black")
let c2 = new Car("Suzuki", 4, "White")

// console.log(c1, c2)

c1.tellAboutCar()
c2.tellAboutCar()



// demo

// let obj = {
//     name : "S",
//     ahge : 12,
//     isPresent : true,
//     address : {
//         city : "Delhi",
//         country : "Ondia"
//     },
//     sayHi : () => {
//         console.log("Hello world")
//     }
// }

// obj.sayHi()


