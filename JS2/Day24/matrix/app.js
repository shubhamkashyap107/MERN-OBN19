// let arr = [1,"qwert",true, []]

// let arr = [[1,2,3],[4,5,6],[7,8,9, [11,12,13,["ans"]]]]
// console.log(arr.flat(Infinity))



// let arr = [[11,12,13],[14,15,156],[11,123,124135423]]
// console.log(arr[0])

// let newArr = [...arr[0]]
// newArr.push(37)

// console.log(newArr)
// console.log(arr)


// let arr = [[11,12,13],[14,15,156],[11,123,124135423]]
// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])

// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])

// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr[2][2])



// let arr = [[1], [1,2], [1,2,3]]

// for(let item of arr)
// {
//     for(let num of item)
//     {
//         console.log(num)
//     }
// }

// for(let i = 0; i < arr.length; i++)
// {
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         console.log(arr[i][j])
//     }
// }



// user input in 1d array

// let size = Number(prompt("Enter array size"))
// let arr = []

// for(let i = 0; i < size; i++)
// {
//     arr.push(Number(prompt(`Enter ${i + 1} number`)))
// }

// console.log(arr)


// user input in 2d array

// let row = Number(prompt("Enter number of rows"))

// let arr = []

// for(let i = 0; i < row; i++)
// {
//     let col = Number(prompt("Enter number of cols"))
//     let inner = []

//     for(let j = 0; j < col; j++)
//     {
//         inner.push(Number(prompt(`Enter row : ${i}, col : ${j} element`)))
//     }

//     arr.push(inner)
// }

// console.log(arr)



// let arr = [
//     [1,44,-10,0],
//     [99,6,5,123],
//     [2,4,9,7]
// ]

// let max = -Infinity
// let min = Infinity

// for(let item of arr)
// {
//     for(let val of item)
//     {
//         if(val > max)
//         {
//             max = val
//         }
//         if(val < min)
//         {
//             min = val
//         }
//     }
// }

// console.log(min, max)

// reverse a 1d array


// let arr = [1,2,3,4]

// let s = 0
// let e = arr.length - 1

// while(s < e)
// {
//     let temp = arr[s]
//     arr[s] = arr[e]
//     arr[e] = temp
//     s++
//     e--
// }

// console.log(arr)



// reverse a 2d array



// let arr = [[1,2,3],[4,5,6],[7,8,9]] // [[3,2,1],[6,5,4],[9,8,7]]

// for(let item of arr)
// {
//     let s = 0
//     let e = item.length - 1

//     while(s < e)
//     {
//         let temp = item[s]
//         item[s] = item[e]
//         item[e] = temp

//         s++
//         e--
//     }
// }

// console.log(arr)


// print all elements column wise

let arr = [[6],[1,2,3],[4,5]]

let gl = -Infinity

for(let item of arr)
{
    gl = Math.max(gl, item.length)
}

for(let i = 0; i < gl; i++)
{
    for(let j = 0; j < arr.length; j++)
    {
        if(arr[j][i] == undefined) continue
        console.log(arr[j][i])
    }
}