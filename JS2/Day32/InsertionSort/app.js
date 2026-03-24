let arr = [15,11,-10,0,1,6] // [-10,0,1,6,11,15]

for(let i = 0; i < arr.length; i++)
{
    for(let j = i + 1; j >= 0; j--)
    {
        console.log("LC")
        if(arr[j] < arr[j - 1])
        {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
        else
        {
            break
        }
    }
}



for(let i = 0; i < arr.length; i++)
{
    for(let j = i + 1; j >= 0; j--)
    {
        console.log("LC")
        if(arr[j] > arr[j - 1])
        {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
        else
        {
            break
        }
    }
}

console.log(arr)



function smallestGreaterElements(arr) {
  let original = [...arr]


  for(let i = 0; i < arr.length - 1; i++)
  {
      let isSorted = true
      for(let j = 0; j < arr.length - 1 - i; j++)
      {
          if(arr[j] > arr[j + 1])
          {
              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
              isSorted = false
          }
      }

      if(isSorted)
      {
          break
      }

  }


  let ans = []

  for(let item of original)
  {
    let idx = -1
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] == item)
      {
        idx = i
        break
      }
    }
    
    while(arr[idx] == arr[idx + 1])
    {
      idx++
    }
    ans.push(idx == arr.length - 1 ? -10000000 : arr[idx + 1])
  }


  return ans
}


