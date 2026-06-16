console.log("Start")


function setTimeoutCB(){
    console.log("SetTimeout")
}
setTimeout(setTimeoutCB, 2000)



function promiseCb(data)
{
    console.log(data)
}
new Promise((res) => {
    res("Promise")
})
.then(promiseCb)


console.log("End")


// start => end => st => p