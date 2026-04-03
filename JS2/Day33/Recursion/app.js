
// for(let i = 1; i <= n; i++)
// {
//     console.log(i)
// }

// function print(i, n)
// {
//     if(i > n)
//     {
//         return
//     }
//     console.log(i)
//     print(i + 1, n)
// }


function print(i, n)
{
    if(i > n)
    {
        return
    }
    print(i + 1, n)
    console.log(i)
}


print(1,3)