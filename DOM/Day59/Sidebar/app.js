const sidebar = document.getElementById("side")
const hiddenElements = document.getElementsByClassName("hide")


sidebar.addEventListener("mouseenter", () => {
    sidebar.style.width = "20vw"

    for(let item of hiddenElements)
    {
        item.style.display = "block"
    }

})

sidebar.addEventListener("mouseleave", () => {
    sidebar.style.width = "5vw"

    for(let item of hiddenElements)
    {
        item.style.display = "none"
    }
})