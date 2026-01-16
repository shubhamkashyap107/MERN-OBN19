let a = Number(prompt("Enter number 1"))
let b = parseInt(prompt("Enter number 2"))
let operation = prompt("Enter operator : +, -, *, /")

if(isNaN(a) || isNaN(b))
{
    console.log("Invalid Input")
}
else
{
    switch(operation)
    {
        case "+":
            console.log(a + b)
            break

        case "-":
            console.log(a - b)
            break

        case "*":
            console.log(a * b)
            break

        case "/":
            console.log(a / b)
            break

        default:
            console.log("Invalid Operation")

    }
}


