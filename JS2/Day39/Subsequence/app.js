function subsequence(arr, idx, ans)
{
    if(idx == arr.length)
    {
        console.log(ans)
        return
    }

    ans.push(arr[idx])
    subsequence(arr, idx + 1,ans)
    ans.pop()
    subsequence(arr, idx + 1,ans)
}

subsequence([1,2,3], 0, [])


function subsequence(str, idx, ans)
{
    if(idx == str.length)
    {
        console.log(ans)
        return
    }


    subsequence(str, idx + 1, ans + str[idx])
    subsequence(str, idx + 1, ans)
}

subsequence("abc", 0, "")