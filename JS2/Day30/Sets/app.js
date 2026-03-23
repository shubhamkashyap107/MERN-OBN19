// const mySet = new Set()

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(4)
// mySet.add(5)
// mySet.add(5)
// mySet.add("qwertyu")
// mySet.add("qwertyu")
// mySet.add("qwertyu")


// console.log(mySet)





// let arr = [11,12,13,14,15,11,12,13,11,12,11]

// const mySet = new Set(arr)
// mySet.delete(3)
// mySet.clear()
// let something = mySet.entries()

// for(let item of something)
// {
//     console.log(item)
// }

// console.log(mySet)
// console.log(something)



// const arr2 = Array.from(mySet)
// console.log(arr2)











// let arr = [11,12,13,14,15,11,12,13,11,12,11]

// const mySet = new Set(arr)


// mySet.forEach((item) => {
//     console.log(item)
// })

// for(let item of mySet)
// {
//     console.log(item)
// }

// console.log(mySet[0])

// let arr = [4,5,7,8,1,2,3]

// let set = new Set(arr)

// if(arr.length == set.size)
// {
//     console.log("No Duplicates")
// }
// else
// {
//     console.log("Duplicates found")
// }


// let arr1 = [1,2,2,1]
// let arr2 = [2,2]


// let set = new Set(arr1)
// let ansSet = new Set()

// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         ansSet.add(item)
//     }
// }

// console.log(Array.from(ansSet))


// let a1 = [1,2]
// let a2 = [2,3]

// let set = new Set([...a1,...a2])
// console.log(Array.from(set))


let A = [1,2,3,4,5,6]
let B = [2,4,8]
// [1,3,5,6]

let set = new Set(A)

for(let item of B)
{
    if(set.has(item))
    {
        set.delete(item)
    }
}

console.log(Array.from(set))