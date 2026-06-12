function clickPicture(fn)
{
    setTimeout(() => {
        console.log("Picture Clicked")
        fn()
    }, 4000)
}

function selectPicture(fn)
{
    setTimeout(() => {
        console.log("Picture selected")
        fn()
    }, 3000)
}

function applyFilter(fn)
{
    setTimeout(() => {
        console.log("Filter applied")
        fn()
    }, 2000)
}

function chooseCaption(fn)
{
    setTimeout(() => {
        console.log("Caption selected")
        fn()
    }, 2000)
}

function postPicture()
{
    setTimeout(() => {
        console.log("Picture posted")
    }, 1000)
}
// clickPicture(selectPicture(applyFilter(chooseCaption(postPicture()))))

clickPicture(() => {
    selectPicture(() => {
        applyFilter(() => {
            chooseCaption(() => {
                postPicture()
            })
        })
    })
})
