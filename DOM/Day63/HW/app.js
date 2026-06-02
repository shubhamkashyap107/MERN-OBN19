const input = document.getElementById("ip")
const button = document.getElementById("btn")
const pending = document.getElementById("pending-cards-container")
const allContainers = document.getElementsByClassName("abc")


// let count = 0


button.addEventListener("click", () => {
    const val = input.value

    if(!val)
    {
        alert("Please enter some text")
        return
    }

    const card = document.createElement("article")
    // card.classList.add()
    card.setAttribute("class", "my-card")
    card.setAttribute("draggable", true)
    card.setAttribute("id", Date.now())
    // card.style.border = ""
    // card.setAttribute("id", Math.random())
    // card.setAttribute("id", count)
    // count++
    card.innerText = val
    pending.append(card)
    input.value = ""

})


for(let item of allContainers)
{
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("kyekanaam", e.target.id)
    })

    item.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    item.addEventListener("drop", (e) => {
        e.preventDefault()

        const id = e.dataTransfer.getData("kyekanaam")
        const card = document.getElementById(id)

        if(e.target.id == "pending-cards-container")
        {
            card.style.border = "2px solid red"
        }
        else if(e.target.id == "progress-cards-container")
        {
            card.style.border = "2px solid yellow"
        }
        else if(e.target.id == "completed-cards-container"){
            card.style.border = "2px solid green"
        }
        // console.log(e.target.tagName)
        e.target.tagName != "ARTICLE" && e.target.append(card)
        // e.target.append(card)

    })
}




window.addEventListener("keydown", (e) => {
    if(e.key == "Enter")
    {
        button.click()
    }
})