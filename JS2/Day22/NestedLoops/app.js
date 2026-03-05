// let n = Number(prompt("Enter your number"))

// for(let i = 1; i <= 10; i++)
// {
//     console.log(`${n} * ${i} = ${n * i}`)
// }

// let n2 = 5
// let str = ""

// for(let i = 0; i < n2; i++)
// {
//     // console.log("*")
//     str += "* "
// }

// console.log(str)

// let person = 4

// for(let j = 1; j <= person; j++)
// {

//     for(let i = 1; i <= 3; i++)
//     {
//         console.log(`Person : ${j}, unit : ${i}`)
//     }

// }

// let start = Number(prompt("Enter start number"))
// let end = Number(prompt("Enter end number"))


// for(let i = start; i <= end; i++) // 1 -> 2 -> 3 -> .... -> 100
// {

//     for(let j = 1; j <= 10; j++) // 1 -> 10
//     {
//         console.log(`${i} * ${j} = ${j * i}`)
//         // count++
//     }

// }




// let arr = [1,2,3]
// for(let i = 0; i < arr.length; i++)
// {
//     let ans = []
//     for(let j = i; j < arr.length; j++)
//     {
//         ans.push(arr[j])
//         console.log(ans)
//     }
// }



// let str = "qwerty"
// for(let i = 0; i < str.length; i++)
// {
//     let ans = ""
//     for(let j = i; j < str.length; j++)
//     {
//         ans += str[j]
//         console.log(ans)
//     }
// }








// console.log(arr.slice(1,4))

// let s = 1
// let e = 4
// let subarray = []

// for(let i = s; i < e; i++)
// {
//     subarray.push(arr[i])
// }


// console.log(subarray)


// let n = 5

// for(let j = 1; j <= n; j++)
// {
//     let str = ""
    
//     for(let i = 1; i <= n; i++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }


// let row = 5
// let col = 7

// for(let i = 1; i <= row; i++)
// {
//     let str = ""

//     for(let j = 1; j <= col; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }

// let n = 3



// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n - i + 1; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }


// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= i; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }





// let n = 4

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n; j++)
//     {
//         // str += "* "

//         if(i == 1 || i == n || j == 1 || j == n)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }























// let n = 5

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= i; j++)
//     {
//         if(i == n || j == 1 || j == i)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }



let n = 5

for(let i = 1; i <= n; i++)
{
    let str = ""

    for(let j = 1; j <= n - i; j++)
    {
        str += "  "
    }

    for(let k = 1; k <= i; k++)
    {
        if(k == i || i == n || k == 1)
        {
            str += "* "
        }
        else
        {
            str += "  "
        }
    }

    console.log(str)
}