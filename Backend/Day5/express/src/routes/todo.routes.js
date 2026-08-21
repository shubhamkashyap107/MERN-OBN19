const express = require("express")
const router = express.Router()
const {v4 : uuid} = require("uuid")
let todos = []

//params
// router.post("/create/:title/:desc", (req, res) => { frontend : domain/api/todos/create/study/react
//query
// router.post("/create", (req, res) => { frontend : domain/api/todos/create?title=study&desc=react
router.post("/", (req, res) => {
    try {
        // const{ title, desc } = req.params
        // const{title, desc} = req.query
        const{ title, desc } = req.body
        todos.push({
            title,
            desc,
            id : uuid()
        })
        res.json({
            msg : "Done",
            data : todos
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

router.get("/", (req, res) => {
    try {
        res.json({
            msg : "Done",
            data : todos
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

router.get("/:id", (req, res) => {
    try {
        const{ id } = req.params

        const foundTask = todos.find((item) => {
            return item.id == id
        })

        if(!foundTask)
        {
            throw new Error("Task not found...")
        }

        res.json({
            msg : "Done",
            data : foundTask
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})


router.delete("/:id", (req,res) => {
    try {
        const{ id } = req.params

        const nArr = todos.filter((item) => {
            return item.id !== id
        })

        todos = nArr

        res.json({
            msg : "Done",
            // data : todos
        })
        
    } catch (error) {
        res.json({
            err : error.message
        })
    }
    
})

router.patch("/:id", (req, res) => {
    try {
        const{ id } = req.params
        const{title, desc} = req.body
        let flag = false

        for(let item of todos)
        {
            if(item.id == id)
            {
                item.title = title
                item.desc = desc
                flag = true
            }
        }

        if(!flag)
        {
            throw new Error("Task not found...")
        }

        res.json({
            msg : "Done",
            data : todos
        })

    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

module.exports = {
    todoRouter : router
}