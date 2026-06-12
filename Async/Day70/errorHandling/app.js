// creating and throwing errors

// const error = new Error("This is a custom error")
// console.log(error)
// throw error


// throw new Error("This is a custom error")

// custom error

class AccioError extends Error{
    constructor(m, n)
    {
        super(m)
        this.name = n
    }
}

// throw new AccioError("Custom erorr", "username error")


// error - handling 


try {
    throw new Error("asdfghj")
    throw new AccioError("Custom erorr", "username error")
} catch (error) {
    console.log(error.name)
}
finally{

}




console.log("Important code")