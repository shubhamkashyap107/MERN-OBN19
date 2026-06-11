const screen = document.getElementById("screen")
const themeBtn = document.getElementById("btn")

var theme = "light";


themeBtn.addEventListener("click", () => {    
    if(theme == "light")
    {
        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        theme = "dark"
        themeBtn.innerText = "Light"
        localStorage.setItem("theme", theme)
    }
    else
    {
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        theme = "light"
        themeBtn.innerText = "Dark"
        localStorage.setItem("theme", theme)

    }
})






window.addEventListener("load", () => {
    let existingTheme = localStorage.getItem("theme")

    if(existingTheme == "light")
    {
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        theme = existingTheme
    }
    else if(existingTheme == "dark")
    {
        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        theme = existingTheme

    }

})