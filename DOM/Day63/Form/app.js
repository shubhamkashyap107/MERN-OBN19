const btn = document.getElementById("btn")
const username = document.getElementById("un")
const password = document.getElementById("pw")
const email = document.getElementById("em")
const age = document.getElementById("age")
const usernameMsg = document.getElementById("unmsg")
const emailMsg = document.getElementById("emmsg")
const passwordMsg = document.getElementById("pwmsg")
const ageMsg = document.getElementById("agemsg")




btn.addEventListener("click", () => {
    let unVal = username.value
    let pwVal = password.value
    let emVal = email.value
    let ageVal = age.value


    if(unVal.length < 4 || unVal > 8)
    {
        // console.log("Username must be 4-8 characters")
        usernameMsg.style.display = "block"
    }

    if(ageVal < 18)
    {
        // console.log("Age must be atleast 18 yrs")
        ageMsg.style.display = "block"
    }

    if(!emVal.endsWith("@gmail.com"))
    {
        console.log("Please enter a valid email")
        emailMsg.style.display = "block"
    }

    let isUc = false
    let isLc = false
    let hasSc = false
    let allowedChars = ["!", "@", "*", "?", "_"]
    

    for(let item of pwVal)
    {
        if(item.toUpperCase() == item)
        {
            isUc = true
        }
        if(item.toLowerCase() == item)
        {
            isLc = true
        }
        if(allowedChars.includes(item))
        {
            hasSc = true
        }
    }
    if(!isLc || !isUc || !hasSc || pwVal.length < 8)
    {
        // console.log("Please enter a strong password")
        passwordMsg.style.display = "block"

    }

})