// // console.log(this)
// "use strict"


// function checkThis()
// {
//     console.log(this)
// }

// checkThis()


// let obj = {
//     name : "qwerty",
//     age : 23,
//     checkThis : function(){
//         console.log(this) // object itself
//     },
//     checkThis2 : () => {
//         console.log(this) // window
//     },
//     checkThis3 : function() // object itself
//     {
//         const fn = () => {
//             console.log(this) // object
//         }
//         fn()
//     },
//     checkThis4 : () => {
//         function fn()
//         {
//             console.log(this)
//         }
//         fn()
//     }
// }


// obj.checkThis()
// obj.checkThis2()
// obj.checkThis3()
// obj.checkThis4()


function introduce(city){
    // console.log(this)
    console.log(`Hello my name is ${this.name} and my age is ${this.age} and i live in ${city}`)
}   

let p1 = {
    name : "ABC",
    age : 10,
    // introduce : function(){
    //     console.log(`Hello my name is ${this.name} and my age is ${this.age}`) -> 1
    // }
}

let p2 = {
    name : "XYZ",
    age : 12,
}

// p1.introduce() -> 1
// p1.introduce.call(p2) -> 1

introduce.call(p1, "Delhi")
introduce.call(p2, "Pune")
introduce.apply(p1, ["Delhi"])


const myIntro = introduce.bind(p2, "Mumbai")
myIntro()

