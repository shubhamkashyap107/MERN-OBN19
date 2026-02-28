// let arr = [1,4,17,2,3,9,11,12,13,14,100] // [1,2,3,4,9,11,12,13,14,17,100]
// let arr = ["c", "d", "e", "f", "a"]
// let arr = ["shubham", "bunty", "mango", "abhishek", "aayush"]

// arr.sort((a, b) => {
//     return a - b
//     // return b - a
// })


// let arr = [false, true, true, false, false]
// arr.sort((a,b) => {
//     return b - a
// })

// console.log(arr)


let arr = [
    {
        name : "Mohan",
        age : 12
    },
    {
        name : "Ashish",
        age : 22
    },
    {
        name : "Raju",
        age : 15
    },
    {
        name : "Bhatia",
        age : 15
    },
    {
        name : "Tanya",
        age : 15
    },
    {
        name : "Aayushi",
        age : 12
    },
        {
        name : "Priya",
        age : 12
    },
]


// arr.sort((a,b) => {
//     // return a.age - b.age
//     return b.age - a.age
// })

// arr.sort((a,b) => {
//     // return a.name.localeCompare(b.name)
//     return b.name.localeCompare(a.name)
// })


arr.sort((a,b) => {
    // let diff = a.age - b.age

    // if(diff == 0)
    // {
    //     return b.name.localeCompare(a.name)
    // }

    // return diff

    return a.age - b.age == 0  ? b.name.localeCompare(a.name) :  a.age - b.age


})















console.log(arr)








