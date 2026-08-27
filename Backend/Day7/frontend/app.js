

for(let i = 1; i <= 100; i++)
{
    fetch("http://localhost:8080/testing")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })

}