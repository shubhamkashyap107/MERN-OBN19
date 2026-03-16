// let arr = [1,2,3,4,5]

// const ans = arr.map((item, index) => {
//     return item ** 2
// })

// console.log(ans)


// let arr = [
//  {name:"Aman", age:17},
//  {name:"Rahul", age:21}
// ]

// let ans = arr.map((item) => {

//     item.isAdult = (item.age >= 18)
//     // return {
//     //     ...item,
//     //     isAdult : item.age >= 18
//     // }
//     return item
// })

// console.log(ans)



// let arr = [1,2,3,4,5,6]

// let ans = arr.filter((item) => {
//     // return item % 2 == 0 // condition
//     return item % 2 != 0 // condition
// })

// console.log(ans)


// let arr = [
//  {task:"Study", done:true},
//  {task:"Workout", done:false},
//  {task:"Code", done:true}
// ]

// let arr = [
//  {email:"a@gmail.com"},
//  {email:"b@yahoo.com"},
//  {email:"c@gmail.com"}
// ]

// let ans = arr.filter((item) => {
//     // return item.done
//     return item.email.includes("gmail")
// })

// console.log(ans)


let arr = ["a","b","c","d","e"]

let ans = arr.filter((item, index) => {
    return index % 2 == 0
})


console.log(ans)







