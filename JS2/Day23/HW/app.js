// let n = 7

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= n; col++)
//     {
//         if(row == 1 || row == n || col == 1 || col == n || row == col || row + col == n + 1)
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

// let spaces = n - 1
// let stars = 1

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         if(i == n || k == 1 || k == stars)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
//     stars += 2
//     spaces--
// }


// let n = 5

// let spaces = 0
// let stars = 2 * n - 1

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         // str += "* "

//         if(i == 1 || k == 1 || k == stars)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
//     stars -= 2
//     spaces++
// }


// let n = 9

// let stars = n
// let spaces = 0

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         str += "* "
//     }

//     console.log(str)

//     if(i < n / 2)
//     {
//         stars -= 2
//         spaces++

//     }
//     else
//     {
//         spaces--
//         stars+=2
//     }

// }

let n = 3
let stars = 1
let spaces = n


for(let i = 1; i <= 2 * n + 1; i++)
{
    let str = ""

    for(let j = 1; j <= spaces; j++)
    {
        str += "  "
    }

    for(let k = 1; k <= stars; k++)
    {
        str += "* "
    }

    console.log(str)

    if(i <= n)
    {
        stars+=2
        spaces--
    }
    else
    {
        stars-=2
        spaces++
    }

}