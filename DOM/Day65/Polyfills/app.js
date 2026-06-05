if(!Array.prototype.hasOwnProperty("sum"))
{
    Array.prototype.sum = function(){
        let s = 0
        for(let item of this)
        {
            s += item
        }
        return s
    }

}

String.prototype.toLowerCase = function()
{
    return this.toUpperCase()
}


Array.prototype.binarySearch = function(target)
{
    let l = 0
    let r = this.length - 1


    while(l <= r)
    {
        let mid = Math.floor((l + r) / 2)

        if(this[mid] == target)
        {
            return mid
        }
        else if(target > this[mid])
        {
            l = mid + 1
        }
        else
        {
            r = mid - 1
        }
    }


    return -1
}





const heading = document.getElementById("heading")


let arr = [
    4,4,1,2,3,5,7,8
]

let avg = arr.sum() / arr.length

heading.innerText = `Average Package : ${avg}`


console.log("Shubham".toLowerCase())


let sa = [1,2,3,4,5,6]

console.log(sa.binarySearch(15))