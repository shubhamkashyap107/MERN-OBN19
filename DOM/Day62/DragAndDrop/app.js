const box = document.getElementById("first")
const box2 = document.getElementById("second")
const ele = document.getElementById("element")


ele.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("kuchBhi", e.target.id)
})

box2.addEventListener("dragover", (e) => {
    e.preventDefault()
})

box2.addEventListener("drop", (e) => {
    // e.preventDefault()
    const myData = e.dataTransfer.getData("kuchBhi")
    // e.target.appendChild(document.getElementById(myData))
    const node = document.getElementById(myData)
    node.style.border = "2px solid red"
    e.target.append(node)
})


box.addEventListener("dragover", (e) => {
    e.preventDefault()
})

box.addEventListener("drop", (e) => {
    // e.preventDefault()
    const myData = e.dataTransfer.getData("kuchBhi")
    e.target.appendChild(document.getElementById(myData))
})