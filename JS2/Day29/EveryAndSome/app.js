// let arr = [-1,1,3,5,7,2]

// let ans = arr.some((item, index) => {
//     return item % 2 == 0
// })

// let ans2 = arr.every((item) => {
//     return item % 2 == 0
// })

// console.log(ans)
// console.log(ans2)


// const students = [
//   { name: "A", marks: [70, 8, 9] },
//   { name: "B", marks: [88, 8, 9] },
//   { name: "C", marks: [50, 8, 9] }
// ];

// let ans = students.some((item) => {

//     let isPresent = false

//     for(let val of item.marks)
//     {
//         if(val > 90)
//         {
//             isPresent = true
//         }
//     }

//     return isPresent
// })


// let ans = students.some((item) => {

//     let isValPresent = item.marks.some((val) => {
//         return val > 90
//     })

//     return isValPresent
    
// })
// console.log(ans)



const users = [
  { name: "A", age: 22 },
  { name: "B", age: 17 },
  { name: "C", age: 19 }
];

const ans = users.filter(item => item.age > 18).map(item => item.name)
console.log(ans)