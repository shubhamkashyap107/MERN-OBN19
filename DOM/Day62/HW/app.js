const btn = document.getElementById("btn")
const input = document.getElementById("ip")
const list = document.getElementById("list")



btn.addEventListener("click", () => {

    const text = input.value
    if(!text)
    {
        alert("Please enter some text")
        return
    }

    const listItem = document.createElement("li")

    // list.addEventListener()
    listItem.style.cursor = "pointer"
    listItem.style.backgroundColor = "yellow"
    listItem.innerText = text
    listItem.style.margin = "20px"
    list.append(listItem)
    input.value = ""
})

list.addEventListener("click", (e) => {
    // console.log(e)
    if(e.target.tagName == "LI")
    {
        e.target.remove()
    }
})