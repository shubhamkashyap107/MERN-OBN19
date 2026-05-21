// const parent = document.getElementById("list")
// console.dir(parent)


// const parent = document.getElementsByClassName("xyz")

// const list = parent[0]
// const [myList] = parent

// console.log(list)
// console.log(myList)


// const listItem1 = document.createElement("li")
// listItem1.innerText = "Apple"

// parent.appendChild(listItem1)


// const listItem2 = document.createElement("li")
// listItem2.innerText = "Bat"

// parent.appendChild(listItem2)


// const parent = document.getElementById("list")
const body = document.getElementsByTagName("body")
let parent = document.createElement("ol")
let data = ["Apple", "Bat", "Cat", "Dog"]


for(let item of data)
{
    let li = document.createElement("li")
    li.innerText = item
    parent.append(li)
}


body[0].append(parent)