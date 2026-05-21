// const box = document.getElementById("box")

// let p1 = document.createElement("p")
// p1.innerText = "Hello from p1"


// let p2 = document.createElement("p")
// p2.innerText = "Hello from p2"


// let p3 = document.createElement("p")
// p3.innerText = "Hello from p3"


// box.appendChild(p1, p2, p3) // older way
// box.append(p1, p2, p3) // newer way


// box.appendChild("Hello world")
// box.append("Hello world")


const box = document.getElementById("box")
box.remove()
const list = document.getElementById("list")

// box.setAttribute("class", "dabba")
// box.setAttribute("qwerty", "asdfgh")
// box.setAttribute("style", "background-color : red; border : 1px solid black")

// console.log(box.getAttribute("style"))
// console.log(box.getAttribute("class"))



const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Strawberry",
  "Watermelon"
];

let count = 1 
for(let item of fruits)
{
    let li = document.createElement("li")
    li.innerText = item
    li.setAttribute("class", "items")
    li.setAttribute("id", count)
    count++
    list.append(li)
}

