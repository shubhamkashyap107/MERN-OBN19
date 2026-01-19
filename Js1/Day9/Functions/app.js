// function sayHi(name = "User")
// {
//     console.log(`Hello ${name}`)
// }


// sayHi("Shubham")
// sayHi("Amit")
// sayHi("Bhanu")
// sayHi()


// function sum(a, b)
// {
//     console.log(a + b)
// }

// sum(12, 100)
// sum(100,9000)



function sayFullName(firstname, lastname = "")
{
    console.log(`Welcome, ${firstname} ${lastname}`)
}

// sayFullName("Singh")
// sayFullName("Honey")
// sayFullName("Honey", "Singh")






// function just4fun(name)
// {
//     console.log("ONE")
// }

// just4fun()

// function just4fun(age, age2, age3)
// {
//     console.log("TWO")
// }


// just4fun(1)

// function -> sum -> 2 user inputs -> print their sum

// function sum()
// {
//     var a = Number(prompt("Enter number 1"))
//     var b = Number(prompt("Enter number 2"))

//     // console.log(a + b)
//     return a + b
// }

// // let ans = sum()
// // console.log(ans)


// console.log(sum())





function testingReturn()
{
    console.log("Hello")

    return "qwerthy"
    // return 1234
    // return false

}


// console.log(testingReturn())



function kuchBhi(name = "User")
{
    var str = `Hello my name is ${name}`
    return str
}


// let ans = kuchBhi("Abhishek")
// console.log(ans)

// console.log(kuchBhi("XYZ"))

// console.log(kuchBhi())




// functional expression

const myFn = function (age, name = "User")
{
    console.log("Hello from functional expression", age, name)
    return "xyz"
}

function sample()
{
    console.log("OK")
}
// abc()
// myFn(67, "Bhanu")
// console.log(myFn)
// let retVal = myFn()
// console.log(retVal)










// arrow functions

// const sayHi = (name = "User") => {
//     console.log("Hi", name)
//     return "Sapna"
// }

// // sayHi("Shubham")
// console.log(sayHi())

// const sayHi = () => (true)
// console.log(sayHi())



// const sayHello = (name = "qwerthj") => console.log(`Hello, ${name}`)
// sayHello("User")


// let consoleKaReturnValue = console.log()
// console.log(consoleKaReturnValue)

// console.log(console.log("Hello"))




function isEven(num)
{
    if(num % 2 == 0)
    {
        return true
    }
    else
    {
        return false
    }
}

let ans = isEven(90)
console.log(ans)


console.log(isEven(91))



const findMax = (a,b) => Math.max(a,b)

function max(a,b)
{
    // return Math.max(a,b)
    let maxNum = Math.max(a,b)
    return maxNum
}

// console.log(findMax(11,-10))
// console.log(max(99,100))

function charCount(str) {
    return str.length
}

console.log(charCount("Acciojob"))


const count = str => str.length
console.log(count("piuhpgiucdhgpdu8fcghfodniucghver"))