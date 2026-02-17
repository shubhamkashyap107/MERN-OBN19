let arr = [999, 10, -5, 16, 4, 6]
let target = 6

let ans = -1

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == target)
    {
        ans = i
        break
    }

}

console.log(ans)


function linearSearch(arr, target)
{
    let ans = -1

    for(let i = 0; i < arr.length ; i++)
    {
        if(arr[i] == target)
        {
            ans = i
            break
        }
    }

    return ans

}

console.log(linearSearch([101,2,-3,4,5,16], 16))

function linearSearch2(arr, x)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == x)
        {
            return true
        }
    }
    return false
}


console.log(linearSearch2([1,2,3,4,5], 1))







function findObject(arr, targetId)
{
    // for(let item of arr)
    // {
    //     if(item.id == targetId)
    //     {
    //         return item
    //     }
    // }
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].id == targetId)
        {
            return arr[i]
        }
    }
    return {}
}



// const users = [
//     {id: 1, name: "Aman"},
//     {id: 2, name: "Riya"},
//     {id: 3, name: "Shubham"},
//     {id: 4, name: "Neha"}
// ];
// console.log(findObject(users, 1))

function findNames(arr, city)
{
    let ans = []

    for(let item of arr)
    {
        if(item.city == city)
        {
            ans.push(item.name)
        }
    }

    return ans
}

const users = [
  {id: 1, name: "Aman", city: "Delhi"},
  {id: 2, name: "Riya", city: "Mumbai"},
  {id: 3, name: "Karan", city: "Delhi"},
  {id: 4, name: "Neha", city: "Pune"}
];

console.log(findNames(users, "Delhi")) // ["Aman", "Karan"]


function firstExpensiveProduct(arr)
{
    for(let item of arr)
    {
        if(item.price > 50000)
        {
            return item
        }
    }

    return {}
}

const products = [
  { id: 1, name: "Mouse", price: 500 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Monitor", price: 12000 },
  { id: 4, name: "iPhone", price: 8000 },
  { id: 5, name: "Laptop", price: 6000 },
  { id: 6, name: "Tablet", price: 20000 }
];

console.log(firstExpensiveProduct(products))




function findUser(arr)
{
    let ans = []

    for(let item of arr)
    {
        if(item.age > 25 && item.city == "Delhi")
        {
            ans.push(item)
        }
    }

    return ans
}

const users1 = [
 {id:1, name:"Aman", age:26, city:"Delhi"},
 {id:2, name:"Riya", age:28, city:"Mumbai"},
 {id:3, name:"Karan", age:30, city:"Delhi"}
];

console.log(findUser(users1))
















function lastItem(arr)
{
    // for(let i = arr.length - 1; i >= 0; i--)
    // {
    //     if(arr[i].category == "electronics")
    //     {
    //         return arr[i]
    //     }
    // }
    let ans = {}

    for(let item of arr)
    {
        if(item.category == "electronics")
        {
            ans = item
            // break
        }
    }

    return ans
}

const items = [
 {id:1, name:"TV", category:"electronics"},
 {id:2, name:"Shirt", category:"clothing"},
 {id:3, name:"Phone", category:"electronics"},
 {id:4, name:"Laptop", category:"electronics"}
];

console.log(lastItem(items))




const productss = [
  { id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Laptop", price: 65000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Keyboard", price: 2000 },
  { id: 6, name: "Smart Watch", price: 15000 }
];

function solve(arr)
{
    let sum = 0
    let cheapest = arr[0]
    let expensive = arr[0]

    for(let item of arr)
    {
        sum += item.price
        
        if(item.price < cheapest.price)
        {
            cheapest = item
        }

        if(item.price > expensive.price)
        {
            expensive = item
        }
    }


    return {
        cheapestProduct : cheapest.name,
        mostExpensiveProduct : expensive.name,
        totalPrice : sum,
        averagePrice : (sum / arr.length)
    }
}

console.log(solve(productss))