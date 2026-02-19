let arr = [1,2,3,4,5] // [5,4,3,2,1]

// extra space
// let ans = []

// for(let item of arr)
// {
//     ans.unshift(item)
// }

// for(let i = arr.length - 1; i >= 0; i--)
// {
//     ans.push(arr[i])
// }

// console.log(ans)


// no extra space / in place reverse

let start = 0
let end = arr.length - 1


while(start < end)
{
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
}

console.log(arr)