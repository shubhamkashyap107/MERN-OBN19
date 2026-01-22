//GLOBAL
var a = 100
let b = 200
const c = 300


// BLOCK SCOPE
{
    var a = 10
    let b = 20
    const c = 30

    // console.log(a,b,c) // accessible inside the block
}

// console.log(a) // var is accessible outside the block
// console.log(b) // let & const shows block scope, can't be accessed outside block, hence reference error 
// console.log(c) // let & const shows block scope, can't be accessed outside block, hence reference error

// FUNCTIONAL SCOPE
function abc()
{
    var a = 10
    let b = 20
    const c = 30

    console.log(a,b,c)
}

// abc()
console.log(a) // can't access any of them outside the function as all of them shows functional scope
console.log(b) // can't access any of them outside the function as all of them shows functional scope
console.log(c) // can't access any of them outside the function as all of them shows functional scope


function testing()
{
    console.log(a,b,c)
}

testing()