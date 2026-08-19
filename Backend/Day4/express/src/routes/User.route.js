const express = require("express");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const router = express.Router()


let users = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 24,
    city: "Delhi",
    email: "rahul@gmail.com",
    isActive: true,
    salary: 65000
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 27,
    city: "Mumbai",
    email: "priya@gmail.com",
    isActive: true,
    salary: 82000
  },
  {
    id: 3,
    name: "Aman Gupta",
    age: 22,
    city: "Noida",
    email: "aman@gmail.com",
    isActive: false,
    salary: 45000
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    age: 30,
    city: "Bangalore",
    email: "sneha@gmail.com",
    isActive: true,
    salary: 95000
  },
  {
    id: 5,
    name: "Arjun Mehta",
    age: 26,
    city: "Pune",
    email: "arjun@gmail.com",
    isActive: false,
    salary: 58000
  },
  {
    id: 6,
    name: "Neha Singh",
    age: 29,
    city: "Delhi",
    email: "neha@gmail.com",
    isActive: true,
    salary: 72000
  },
  {
    id: 7,
    name: "Rohit Malhotra",
    age: 35,
    city: "Chandigarh",
    email: "rohit@gmail.com",
    isActive: true,
    salary: 110000
  },
  {
    id: 8,
    name: "Ananya Joshi",
    age: 23,
    city: "Jaipur",
    email: "ananya@gmail.com",
    isActive: false,
    salary: 50000
  },
  {
    id: 9,
    name: "Karan Bansal",
    age: 31,
    city: "Gurgaon",
    email: "karan@gmail.com",
    isActive: true,
    salary: 88000
  },
  {
    id: 10,
    name: "Simran Kaur",
    age: 28,
    city: "Amritsar",
    email: "simran@gmail.com",
    isActive: true,
    salary: 76000
  }
];



router.get("/", isLoggedIn ,(req, res) => {
    try {
        res.json({
            data : users
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

router.delete("/", (req, res) => {
    try {
      users = []
        // const removedVal = users.pop()
        res.json({
            msg : "User deleted",
            // deletedData : removedVal
        })
    } catch (error) {
         res.json({
            err : error.message
        })
    }
})

module.exports = {
    UserRouter : router
}

