function clickPicture()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Picture Clicked")
            res()
        }, 4000)
    })
}

function selectPicture()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Picture selected")
            res()
        }, 3000)
    })

}

function applyFilter()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Filter applied")
            res()
        }, 2000)
    })

}

function chooseCaption()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Caption selected")
            res()
        }, 2000)
    })

}

function postPicture()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Picture posted")
            res()
        }, 1000)
    })

}
// clickPicture(selectPicture(applyFilter(chooseCaption(postPicture()))))

// clickPicture(() => {
//     selectPicture(() => {
//         applyFilter(() => {
//             chooseCaption(() => {
//                 postPicture()
//             })
//         })
//     })
// })

clickPicture() // promise
.then(selectPicture) // cb => promise
.then(applyFilter) // cb => promise
.then(chooseCaption) // cb => promise
.then(postPicture) // cb
