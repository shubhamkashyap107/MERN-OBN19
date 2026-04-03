// let map = new Map()


// function solve(n)
// {
//     console.log("n is", n)
//     if(map.has(n))
//     {
//         return map.get(n)
//     }
//     if(n == 1)
//     {
//         return 0
//     }
//     if(n == 2)
//     {
//         return 1
//     }
//     // return solve(n - 1) + solve(n - 2)
//     let leftAns = solve(n - 1)
//     let rightAns = solve(n - 2)

//     map.set(n - 1, leftAns)
//     map.set(n - 2, rightAns)

//     return leftAns + rightAns
// }

// console.log(solve(5)) // 2 ** n
// // console.log(map)


let arr = [1,2,3,4]
console.log(arr)