const button = document.getElementById("btn")
const image = document.getElementById("img")


fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        // console.log(data)
        image.src = data.message
})


button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        // console.log(data)
        // image.src = data.message
        const newImage = document.createElement("img")
        newImage.src = data.message

        document.body.append(newImage)
    })
})