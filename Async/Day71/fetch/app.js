const container = document.getElementById("main")
const api = "https://dummyjson.com/products"

fetch(api)
.then((res) => {
    return res.json()
})
.then((data) => {
    

    for(let item of data.products)
    {
        console.log(item)
        const card = document.createElement("article")

        const img = document.createElement("img")
        img.src = item.images[0]

        const name = document.createElement("h3")
        name.innerText = item.title

        const price = document.createElement("p")
        price.innerText = "$" + item.price

        const textContainer = document.createElement("div")
        textContainer.append(name, price)

        // style
        img.style.height = "200px"
        card.style.border = "2px solid black"
        card.style.width = "200px"

        card.append(img, textContainer)
        container.append(card)
    }

})
