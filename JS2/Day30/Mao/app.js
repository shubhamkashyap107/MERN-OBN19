// let myMap = new Map()

// myMap.set("name", "qwertyu")
// myMap.set("name2", "asdfghj")

// myMap.delete("name")
// myMap.clear()

// for(let [key, value] of myMap)
// {
//     console.log(key, value)
// }


// const iterable = myMap.entries()
// for(let item of iterable)
// {
//     console.log(item[0], item[1])
// }

// myMap.forEach((value, key) => {
//     console.log(value, key)
// })

// console.log(myMap.get("name3"))
// console.log(myMap.has("name"))

// console.log(myMap)

let str = "mynameisjavascript"
let map = new Map()

for(let item of str)
{
    map.set(item, (map.get(item) || 0) + 1)
    // if(map.has(item))
    // {
    //     map.set(item, map.get(item) + 1)
    // }
    // else
    // {
    //     map.set(item, 1)
    // }
}

console.log(map)