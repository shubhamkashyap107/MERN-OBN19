// console.log(Promise.prototype.__proto__.__proto__)


const p1 = new Promise((resolve, reject) => {
    let arr = []

    if(arr.length > 0)
    {
        resolve(arr)
    }
    else
    {
        reject("Data nhi mila")
    }

})

p1
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})


// console.log(p1)

// console.log(Promise.prototype)



const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res({name : "Shubham"})
        // rej({msg : "Kaam nhi hua"})

    }, 4000)
})



p2
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Mai toh chalunga hi")
})








// setTimeout(() => {
//     console.log(p2)
// }, 6000)