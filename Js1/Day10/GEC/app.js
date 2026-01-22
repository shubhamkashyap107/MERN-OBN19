var a = 99

function xyz()
{
    var age = 33
    console.log("Hey")

    return function(){
        console.log("HEllo Ji")
    }
}

var b = xyz()
b()


//

function one()
{
    function inner()
    {
        console.log("Hello from Inner")
    }
    inner()
    return inner
}

var three = one()
three()















