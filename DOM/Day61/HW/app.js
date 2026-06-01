const display = document.getElementById("display")
const incrementBtn = document.getElementById("inc")
const resetBtn = document.getElementById("res")
const decrementBtn = document.getElementById("dec")




incrementBtn.addEventListener("click", () => {
    let curr = Number(display.innerText)
    curr++
    display.innerText = curr
})



decrementBtn.addEventListener("click", () => {
    let curr = Number(display.innerText)
    // if(curr == 0)return
    curr--
    display.innerText = curr
})



resetBtn.addEventListener("click", () => {
    display.innerText = "0"
})