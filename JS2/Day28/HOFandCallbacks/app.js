// function abc(name, age)
// {
//     console.log(`Hello i am ${name} and my age is ${age}`)


//     return "qwertyuio"
// }

// console.log(abc("Amar", 12))


function hof()
{
    const fn = () => {
        console.log("Hello from returned function")
    }
    return fn
}

function hof2(cb)
{
    cb()
}


function hof3(cb)
{
    cb()

    return () => {
        
    }
}

// const returnedFn = hof()
// returnedFn()

// hof()()
hof2(() => {
    console.log("Hello from the passed function")
})