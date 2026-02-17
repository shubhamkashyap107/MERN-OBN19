// const obj = {
//     name : "ABC",
//     age : 34,
//     isPresent : true,
//     sayHi : () => {
//         console.log("HEllo USer")
//     },
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     designation : "Analyst"
// }

// console.log(obj.hasOwnProperty("xyz"))
// console.log(obj.hasOwnProperty("address"))


// if(!obj.hasOwnProperty("designation"))
// {
//     obj.designation = "Software Developer"
// }








// console.log(obj)

// console.log(obj.age)
// obj.sayHi()
// console.log(obj.address.city, obj.address.country)
// console.log(obj["address"]["city"])
// console.log(typeof obj)




// const obj = {
//     name : "",
//     age : 0,
//     isPresent : false
// }


// if(obj.age)
// {

// }
// else
// {
//     obj.age = 99    
// }

// console.log(obj)






let arr = [1,-2,0,3,-10,0,100,-99,0, 1,2,34]

function solve(arr)
{
    let zero = 0
    let negative = 0
    let positive = 0

    for(let item of arr)
    {
        if(item == 0) zero++
        else if(item < 0) negative++
        else if(item > 0) positive++
    }



    return {zero, negative, positive}

}




// let ans = solve(arr)
// console.log(ans)


// let name = "Shubham"
// let age = 90
// let isPresent = true

// const obj = {name, age, isPresent}
// console.log(obj)



// let str = "a"


// if(str.toUpperCase() == str)
// {
//     console.log("Uppercase")
// }
// else if(str.toLowerCase() == str)
// {
//     console.log("Lowercase")
// }





// if(str >= "A" && str <= "Z")
// {
//     console.log("Uppercase")
// }
// else if(str >= "a" && str <= "z")
// {
//    console.log("Lowercase")
// }


// let str = "ab_CD!efg?H-iJ"

// function abc(str)
// {

//     let uc = 0
//     let lc = 0
//     let sc = 0

//     for(let item of str)
//     {
//         if(item >= "A" && item <= "Z")
//         {
//             uc++
//         }
//         else if(item >= "a" && item <= "z")
//         {
//             lc++
//         }
//         else
//         {
//             sc++
//         }
//     }

//     return {
//         uppercaseCOunt : uc,
//         lowercaseCount : lc,
//         specialCharCount : sc
//     }
// }


// console.log(abc(str))



let str = "abcdabc"
let ans = {}

for(let item of str)
{
    if(ans.hasOwnProperty(item))
    {
        ans[item] = ans[item] + 1
    }
    else
    {
        ans[item] = 1
    }
}


console.log(ans)
