let arr = [7,3,10,5,1]
let target = 6





arr.sort((a, b) => {
    // let d1 = Math.abs(target - a)
    // let d2 = Math.abs(target - b)

    // if(d1 == d2)
    // {
    //     return a - b
    // }
    // else
    // {
    //     return d1 - d2
    // }

    return Math.abs(target - a) == Math.abs(target - b) ? a - b : Math.abs(target - a) - Math.abs(target - b)
})

console.log(arr)