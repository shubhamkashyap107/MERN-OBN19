const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")




outer.addEventListener("click", () => {
    console.log("Outer click")
})


middle.addEventListener("click", (e) => {
    console.log("Middle click")
    e.stopPropagation()
})


inner.addEventListener("click", () => {
    console.log("Inner click")
})


