const h1 = document.getElementById("one")
const image = document.getElementById("img")
console.log(h1.dataset.name)

h1.addEventListener("click", () => {
    image.src = image.dataset.src
})
