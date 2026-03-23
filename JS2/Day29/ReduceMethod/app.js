// let arr = [999,1,2,3,4,5,6,7,8,9,10]

// const ans = arr.reduce((prev, curr) => {
//     return prev + curr
// }, 0)

// let max = arr.reduce((prev, curr) => {
//     return Math.max(prev, curr)
// })



// console.log(max)



// let arr = ["a", "c", "d", "z"]


// let ans = arr.reduce((p, c) => {
//     return p + 1
// }, 0)

// console.log(ans)


// let arr = ["a", "b", "a", "c", "b", "a"]

// let ans = arr.reduce((prev, curr) => {
//     if(prev[curr])
//     {
//         prev[curr] = prev[curr] + 1
//     }
//     else
//     {
//         prev[curr] = 1
//     }
//     return prev
// }, {})


// console.log(ans)



// let arr = [[1, 2], [3, 4], [5]]

// let ans = arr.reduce((prev, curr) => {
//     return [...prev, ...curr]
// })

// console.log(ans)

// let arr =  ["name", "age"]

// let obj = arr.reduce((prev, curr) => {
//     prev[curr] = null
//     return prev
// }, {})


// console.log(obj)


let arr = [1, 2, 3, 4, 5]

let obj = arr.reduce((prev, curr) => {
    if(curr % 2 == 0)
    {
        if(prev.even)
        {
            prev.even.push(curr)
        }
        else
        {
            prev.even = [curr]
            // prev.even.push(curr)
        }
    }
    else
    {
        if(prev.odd)
        {
            prev.odd.push(curr)
        }
        else
        {
            prev.odd = [curr]
        }
    }
    return prev
},{
    // odd : [],
    // even : []
})

console.log(obj)