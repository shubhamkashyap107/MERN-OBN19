const fs = require("fs")
const[a,b,operation, filename, data] = process.argv

try {
        
    if(!operation || !filename)
    {
        throw new Error("Please enter operation and file name")
    }


    switch(operation)
    {
        case "create":
            if(!data)
            {
                throw new Error("Data field is required")
            }
            fs.writeFileSync(filename, data)
            console.log("File created successfully...")
            break;
            
        case "read":
            const val = fs.readFileSync(filename, "utf-8")
            console.log(val)
            break;

        case "update":
            if(!data)
            {
                throw new Error("Data field is required")
            }
            fs.appendFileSync(filename, data)
            break;

        case "delete":
            fs.unlinkSync(filename)
            console.log("File deleted successfully...")
            break;
        
        default:
            console.log("Invalid Operation")
    }
} catch (error) {
    console.log(error.message)
}
