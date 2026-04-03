
function merge(a1, a2)
{
    let ans = []
    let i = 0;
    let j = 0;

    while(i < a1.length || j < a2.length)
    {
        if(a1[i] <= a2[j])
        {
            ans.push(a1[i])
            i++
        }
        else
        {   if(a2[j])
            {
                ans.push(a2[j])
                j++
            }
            else
            {
                ans.push(a1[i])
                i++
            }

        }
    }

    return ans
}


function mergeSort(arr)
{
    if(arr.length == 1 || arr.length == 0)
    {
        return arr
    }

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)

}


console.log(mergeSort([5,4,3,2,1]))