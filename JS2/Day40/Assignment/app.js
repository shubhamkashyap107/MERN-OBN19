// let arr = [".;", "abc", "def", "ghi","jkl", "mno", "pqrs", "tu", "vwx", "yz"]

// function solve(n, idx, ans)
// {
//     if(idx == n.length)
//     {
//         console.log(ans)
//         return
//     }

//     // console.log(n[idx])
//     let currStr = arr[n[idx]]

//     for(let item of currStr)
//     {
//         ans += item
//         solve(n, idx + 1, ans)
//         ans = ans.slice(0, ans.length - 1)
//     }

// }

// solve("19", 0, "")




let str = "ABABC"
let str2 = "BABCA"
let map = new Map()

for(let i = 0; i < str.length; i++)
{
    let temp = ""
    for(let j = i; j < str.length; j++)
    {
        temp += str[j]
        // console.log(temp)
        let arr = map.get(j - i + 1)
        map.set(j - i + 1, arr ? [...arr, temp] : [temp])
    }
}


let ans = ""

for(let i = 0; i < str2.length; i++)
{
    let temp = ""
    for(let j = i; j < str2.length; j++)
    {
      temp += str2[j]
      let arr = map.get(j - i + 1)
    //   console.log(arr, temp)
      if(arr.includes(temp) && temp.length > ans.length)
      {
        ans = temp
      }
    }
}





// console.log(map)
console.log(ans)