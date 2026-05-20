const dabba = document.getElementById("box")
const div = document.getElementById("box2")
// console.dir(dabba)

// dabba.innerText = "Hell ji from JS"
// dabba.innerHTML = "aqwertyu"
// dabba.textContent = "asertyu"


// dabba.innerText = "Hello World"
// dabba.innerText = "<h1>Hello world</h1>"
// dabba.innerHTML = "<h1>Hello world</h1>"


// console.log(dabba.innerText)
// console.log(dabba.textContent)

// console.log(div)

// div.remove()

const parent = document.getElementById("parent")


const mySpan = document.createElement("span")
mySpan.innerHTML = "Hello from span made thru js"

parent.appendChild( mySpan)