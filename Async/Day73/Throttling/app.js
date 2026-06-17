const button = document.getElementById("btn")
const input = document.getElementById("ip")

function throttle(fn, delay)
{
    let last = 0;
    return function(e)
    {
        let now = Date.now()
        if(now - last <= delay)
        {
            return
        }
        last = now
        fn(e)
    }
}

let throttledHandler = throttle(() => console.log("OK"), 2000)
let throttledIpHandler = throttle((e) => console.log(`API Called for query : ${e.target.value}`), 2000)

button.addEventListener("click", throttledHandler)
input.addEventListener("input", throttledIpHandler)
