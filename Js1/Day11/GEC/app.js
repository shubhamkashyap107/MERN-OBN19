function outer()
{

    var age = 22
    console.log(age)

    return function(){
        console.log("Hello from returned function")
    }

}

var something = outer()
something()