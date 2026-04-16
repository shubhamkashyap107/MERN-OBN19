function outer()
{
    var a = 10

    function inner()
    {
        console.log(a)
    }

    inner()
    return inner
}


var fn = outer()
fn()