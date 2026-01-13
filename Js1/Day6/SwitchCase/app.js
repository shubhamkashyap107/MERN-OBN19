// var month = "hello"

// if(month == 1)
// {
//     console.log(31)
// }
// else if(month == 2)
// {
//     console.log(28)
// }
// else if(month == 3)
// {
//     console.log(31)
// }
// else if(month == 4)
// {
//     console.log(30)
// }
// else if(month == 5)
// {
//     console.log(31)
// }
// else if(month == 6)
// {
//     console.log(30)
// }
// else if(month == 7)
// {
//     console.log(31)
// }
// else if(month == 8)
// {
//     console.log(31)
// }
// else if(month == 9)
// {
//     console.log(30)
// }
// else if(month == 10)
// {
//     console.log(31)
// }
// else if(month == 11)
// {
//     console.log(30)
// }
// else if(month == 12)
// {
//     console.log(31)
// }
// else
// {
//     console.log("Invalid Input")
// }




// var month = 12


// switch(month)
// {
//     case 1:
//         console.log(31)
//         break;
//     case 2:
//         console.log(28)
//         break;
//     case 3:
//         console.log(31)
//         break;
//     case 4:
//         console.log(30)
//         break;
//     case 5:
//         console.log(31)
//         break;

//     case 6:
//         console.log(30)
//         break;

//     case 7:
//         console.log(31)
//         break;

//     case 8:
//         console.log(31)
//         break;

//     case 9:
//         console.log(30)
//         break;

//     case 10:
//         console.log(31)
//         break;

//     case 11:
//         console.log(30)
//         break;

//     case 12:
//         console.log(31)
//         break

//     default:
//         console.log("Invalid Input")
// }

// var month = 2


// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
// {
//     console.log(31)
// }
// else if(month == 4 || month == 6 || month == 9 || month == 1)
// {
//     console.log(30)
// }
// else if(month == 2)
// {
//     console.log(28)
// }
// else
// {
//     console.log("Invalid Input")
// }




// var month = 7


// switch(month)
// {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(31)
//         break

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30)
//         break

//     case 2:
//         console.log(28)
//         break

//     default:
//         console.log("Invalid Input")
// }






// var n = 341

// switch(n % 2 == 0 )
// {
//     case true:
//         console.log("Even")
//         break
//     case false:
//         console.log("Odd")
// }

// switch(true)
// {
//     case n % 2 == 0:
//         console.log("Even")
//         break;
    
//     case n % 2 != 0:
//         console.log("Odd")

// }

// var marks = 10

// switch(true)
// {
//     case marks >= 90 && marks <= 100:
//         console.log("A")
//         break

//     case marks >= 80 && marks < 90:
//         console.log("B")
//         break


//     case marks >= 70 && marks < 80:
//         console.log("C")
//         break

//     case marks >= 60 && marks < 70:
//         console.log("C")
//         break

//     case marks < 0 || marks > 100:
//         console.log("Invalid Input")
//         break

//     default:
//         console.log("Fail")


// }


// var n1 = 23
// var n2 = 100
// var operation = "shubham"

// switch(operation)
// {
//     case "+":
//         console.log(n1 + n2)
//         break
//     case "*":
//         console.log(n1 * n2)
//         break
//     case "-":
//         console.log(n1 - n2)
//         break
//     case "/":
//         console.log(n1/n2)
//         break
//     case "**":
//         console.log(n1 ** n2)
//         break

//     default:
//         console.log("Invalid Operation")

// }


var n = -101

switch(true)
{
    case n == 0:
        console.log("Zero")
        break

    case n < 0:
        switch(true)
        {
            case n % 2 == 0:
                console.log("-ve, Even")
                break

            case n % 2 != 0:
                console.log("-ve, Odd")
                break
        }
        break

    case n > 0:
         switch(true)
        {
            case n % 2 == 0:
                console.log("+ve, Even")
                break

            case n % 2 != 0:
                console.log("+ve, Odd")
                break
        }
        break

}
















