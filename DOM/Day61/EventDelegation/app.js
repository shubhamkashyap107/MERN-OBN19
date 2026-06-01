const cards = document.getElementsByClassName("card")
const cart = document.getElementById("cart")
const box = document.getElementById("box")

// for(let item of cards)
// {
//     item.addEventListener("click", () => {
//         // console.log("Item clicked")
//         let curr = item.innerText
//         cart.innerText = curr + ", " + cart.innerText
//     })
// }


box.addEventListener("click", (e) => {
    if(e.target.tagName == "MAIN")
    {
        return
    }
    let curr = e.target.innerText
    cart.innerText = curr + ", " + cart.innerText
})