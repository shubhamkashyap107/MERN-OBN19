let arr = [9,1,0,2,6] // [0,1,2,6,9]

for(let i = 0; i < arr.length - 1; i++)
{
    let minIdx = i

    for(let j = i + 1; j < arr.length; j++)
    {
        if(arr[j] < arr[minIdx])
        {
            minIdx = j
        }
    }
    if(i != minIdx)
    {
        let temp = arr[minIdx]
        arr[minIdx] = arr[i]
        arr[i] = temp
    }
}



for(let i = 0; i < arr.length - 1; i++)
{
    let maxIdx = i

    for(let j = i + 1; j < arr.length; j++)
    {
        if(arr[j] > arr[maxIdx])
        {
            maxIdx = j
        }
    }
    if(i != maxIdx)
    {
        let temp = arr[maxIdx]
        arr[maxIdx] = arr[i]
        arr[i] = temp
    }
}

console.log(arr)