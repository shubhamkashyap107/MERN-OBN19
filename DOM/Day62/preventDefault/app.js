const form = document.getElementById("form")
// const btn = document.getElementById("page")
const ip = document.getElementById("ip")
const checkbox = document.getElementById("check")
const link = document.getElementById("link")


form.addEventListener("submit", (e) => {
    // alert("Form submitted")
    // console.log(e)
    e.preventDefault()
})


form.addEventListener("click",() => {
    console.log("Form clicked")
})

// console.log(window)

// btn.addEventListener("click", () => {
//     window.location.reload()
// })

// window.addEventListener("click", () => {
//     console.log("Mouse clicked")
// })

// window.addEventListener("keydown", (e) => {
//     // console.log("Key pressed")
//     console.log(e)
// })



window.addEventListener("contextmenu", (e) => {
    console.log("OK")
    e.preventDefault()
})

ip.addEventListener("paste", (e) => {
    // console.log("OK")
    e.preventDefault()
})


window.addEventListener("visibilitychange", () => {
    alert("Cheater")
})


checkbox.addEventListener("click", (e) => {
    e.preventDefault()
})


link.addEventListener("click", (e) => {
    e.preventDefault()
})