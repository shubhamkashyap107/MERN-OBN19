const darkModeBtn = document.getElementById("dark")
const lightModeBtn = document.getElementById("light")
const mainBox = document.getElementById("text")
const input = document.getElementById("ip")
const heading = document.getElementById("heading")

darkModeBtn.addEventListener("click", () => {
    mainBox.style.backgroundColor = "black"
    mainBox.style.color = "white"
})



lightModeBtn.addEventListener("click", () => {
    mainBox.style.backgroundColor = "white"
    mainBox.style.color = "black"
})


// window.addEventListener("load", () => {
//     input.focus()
// })


input.addEventListener("focus", () => {
    input.style.width = "30%"
})

input.addEventListener("blur", () => {
    input.style.width = "10%"
})

// input.addEventListener("input", (e) => {
//     // console.log(input.value)
//     // console.log(e.target.value)
//     heading.innerText = e.target.value
// })


input.addEventListener("change", (e) => {
    heading.innerText = e.target.value  
})