const express = require("express")
const app = express()

const users = [
  {
    id: 1,
    name: "Shubham",
    age: 26,
    email: "shubham@example.com",
    city: "Delhi",
    isActive: true
  },
  {
    id: 2,
    name: "Rahul",
    age: 24,
    email: "rahul@example.com",
    city: "Mumbai",
    isActive: false
  },
  {
    id: 3,
    name: "Priya",
    age: 27,
    email: "priya@example.com",
    city: "Bangalore",
    isActive: true
  },
  {
    id: 4,
    name: "Aman",
    age: 22,
    email: "aman@example.com",
    city: "Delhi",
    isActive: true
  },
  {
    id: 5,
    name: "Neha",
    age: 25,
    email: "neha@example.com",
    city: "Pune",
    isActive: false
  },
  {
    id: 6,
    name: "Arjun",
    age: 30,
    email: "arjun@example.com",
    city: "Chennai",
    isActive: true
  },
  {
    id: 7,
    name: "Sneha",
    age: 23,
    email: "sneha@example.com",
    city: "Delhi",
    isActive: true
  },
  {
    id: 8,
    name: "Vikram",
    age: 29,
    email: "vikram@example.com",
    city: "Mumbai",
    isActive: false
  }
];



app.get("/users", (req, res) => {
    try {

        res.json(users)
        
    } catch (error) {
        res.json({
            err : error.message
        })
    }
}) // domain.com/products, request handler


app.delete("/users", (req, res) => {

    try {
       
        const obj = users.pop()
        res.json({
            msg : "done",
            delUser : obj
        }) 
    } catch (error) {
         res.json({
            err : error.message
        })
    }

})



app.listen(8080, () => {
    console.log("Server running on port 8080")
})