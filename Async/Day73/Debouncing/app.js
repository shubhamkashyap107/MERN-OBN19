const input = document.getElementById("gs")


// function inputHandler()
// {
//     console.log("API Called...")
// }


// function inputHandler()
// {
//     setTimeout(() => {
//         console.log("API Called...")
//     }, 2000)
// }


// let id;
// function inputHandler()
// {
//     clearTimeout(id)
//     id = setTimeout(() => {
//         console.log("API Called...")
//     }, 2000)
// }


// let id;
// function inputHandler(e)
// {
//     clearTimeout(id)
//     id = setTimeout(() => {
//         console.log(`API called for query : ${e.target.value}`)
//     }, 2000)
// }


// input.addEventListener("input", inputHandler)








function debounce(fn, delay)
{
    let id;

    return function(e)
    {
        clearTimeout(id)
        if(e.target.value == "")return
        // id = setTimeout(fn(a,b,c), delay)
        id = setTimeout(() => {
            fn(e)
        }, delay)
    }
}

const debouncedHandler = debounce((e) => console.log(`API called for query : ${e.target.value}`), 1000)
input.addEventListener("input", debouncedHandler)

