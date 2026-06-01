const titleBar = document.getElementById("title")
const descBar = document.getElementById("desc")
const addBtn = document.getElementById("btn")
const cardContainer = document.getElementById("right")


addBtn.addEventListener("click", () => {

    if(!titleBar.value || !descBar.value)
    {
        alert("Please enter both the fields")
        return
    }

    const card = document.createElement("article")

    card.addEventListener("click", () => {
        card.remove()
    })

    const titleContainer = document.createElement("h2")
    titleContainer.innerText = titleBar.value
    const descContainer = document.createElement("p")
    descContainer.innerText = descBar.value

    card.append(titleContainer, descContainer)

    card.style.backgroundColor = "white"
    card.style.width = "100%"
    card.style.padding = "10px 5px"
    card.style.borderRadius = "10px"

    cardContainer.append(card)

    titleBar.value = ""
    descBar.value = ""
})