// console.log("Maggi Bana")



// setTimeout(() => {
//     console.log("Sauce")
// }, 0)



// console.log("Maggi kha lo")


// for(let i = 0; i < 999999999; i++)
// {
    
// }






// setTimeout(() => {
//     console.log("ONE")
// }, 3000)

// setTimeout(() => {
//     console.log("TWO")
// }, 2000)

// setTimeout(() => {
//     console.log("THREE")
// }, 1000)





// const body = document.getElementById("bd")


// const ad = document.createElement("h1")
// ad.innerText = "Kharid Lo!!"

// setTimeout(() => {
//     body.append(ad)
// }, 0)




// const intervalId = setInterval(() => {
//     console.log("Hello")
// }, 0)

// clearInterval(intervalId)




// const body = document.getElementById("bd")
// const ad = document.createElement("article")
// const adText = document.createElement("h1")
// const adCloseBtn = document.createElement("button")
// adText.innerText = "This is your ad"
// adCloseBtn.innerText = "Close Ad"


// ad.append(adText, adCloseBtn)


// adCloseBtn.addEventListener("click", () => {
//     ad.remove()
// })


// setInterval(() => {
//     body.append(ad)
// }, 3000)


// create your own setInterval function, using setTimeout()



// mySetInterval(() => {}, 7000)



function mySetInterval(cb, delay)
{
    let id;

    function repeat()
    {
        cb()
        id = setTimeout(repeat, delay)
    }

    
    id = setTimeout(repeat, delay)

    return () => clearTimeout(id)

}


const fn = mySetInterval(() => {
    console.log("Hello")
}, 1000)



setTimeout(() => {
 fn()
}, 5000)




