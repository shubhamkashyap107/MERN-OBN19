const obj = {
    name :  "Rohan",
    age : 12,
    isPresent : true,
    sayHi : function()
    {
        console.log("hi " + obj.name)
    },
    sayHello : function() {
        console.log("Hello " + this.name)
    }
}

obj.sayHi()
obj.sayHello()
console.log(obj)


// let temp = obj.name
// obj.name = obj.age
// obj.age = temp
// delete obj.isPresent
// console.log(obj)



// for(let item in obj)
// {
//     console.log(item, obj[item])
// }















// console.log(obj)
// console.log(obj.name, obj.age, obj.isPresent)
// console.log(obj["age"])

// obj.age = 14
// obj["name"] = "abc"
// obj.city = "Delhi"
// obj["color"] = "red"

// console.log(obj)

