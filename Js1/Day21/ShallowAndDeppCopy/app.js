let car = {
    tyres : 4,
    brand : "Maruti Suzuki",
    colors : ["black", "white", "red", "blue"]
}

let arr = [1,2,3,true,false, "qwertyu"]

// const jsonCar = JSON.stringify(car)
// console.log(car)
// console.log(typeof jsonCar)
// console.log(jsonCar.slice(3))


// const jsonArr = JSON.stringify(arr)
// console.log(arr)
// console.log(typeof jsonArr)
// console.log(jsonArr.toUpperCase())

// let car2 = {
//     ...car
// }

// car2.colors.push("pink")

// console.log(car)
// console.log(car2)



// let dataFromBackend = JSON.stringify(car)
// console.log(dataFromBackend)


// const usableData = JSON.parse(dataFromBackend)
// console.log(usableData)



// DEEP COPY

// let person1 = {
//     naam : "ABC",
//     age : 10,
//     language : ["english", "hindi"]
// }

// let person2 = person1
// let person2 = { ...person1 }



// let str = JSON.stringify(person1)
// let person2 = JSON.parse(str)


// person2.language.push("marathi")


// console.log(person1)
// console.log(person2)











let person1 = {
    naam : "ABC",
    age : 10,
    language : ["english", "hindi"],
    sayHi : function(){
        console.log("HEllo")
    }
}

// let person2 = structuredClone(person1)
// let person2 = Object.assign({}, person1)
// let person2 = {}
// Object.assign(person2, person1)
let person2 = JSON.parse(JSON.stringify(person1))
person2.sayHi = function(){
    console.log("Hello")
}



person2.language.pop()


console.log(person1)
console.log(person2)




// let person2 = structuredClone(person1)
// let person2 = JSON.parse(JSON.stringify(person1))
// let person2 = { ...person1 }


// person2.language.pop()

// console.log(person1)
// console.log(person2)

// let o1 = {a : 1}
// let o2 = {z : 11}
// let o3 = {p : 45}

// let o1kadusravariable = Object.assign(o1, o2, o3, {name : "asdfghj"})

// console.log(o1)
// console.log(o1kadusravariable)







