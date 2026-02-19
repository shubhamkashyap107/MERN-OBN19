// let num = 23456

// let str = String(num)
// console.log(str.split("").reverse().join(""))




// let ans = 0

// while(num > 0)
// {
//     let lastDigit = num % 10
//     ans  = ans * 10 + lastDigit
//     num = Math.floor(num / 10)
// }

// console.log(ans)




// let str = "qwerty"
// str.split("").reverse().join("")

// let ans = ""
// for(let i = str.length - 1; i >= 0; i--)
// {
//     ans += str[i]
// }
// console.log(ans)


let str = "qwertyuiop"
let ans = ""

for(let i = 0; i < str.length; i++)
{
    // ans = str[i] + ans
    ans = ans + str[str.length - i - 1]
}

console.log(ans)






