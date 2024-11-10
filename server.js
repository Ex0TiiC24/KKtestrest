const express = require('express')
const app = express()
const port = 8000
const bodyparser = require('body-parser')

const users = []

app.use(bodyparser.json())

app.get('/get',(req,res)=>{
    res.send(users)
})

app.post('/users/post',(req,res)=>{
    let coming = req.body
    users.push(coming)
    res.send({
        message: "Student added",
        data: coming
    })
})

app.get('/users/find/:id',(req,res)=>{
    let id = parseInt(req.params.id)
    if(users.length === 0){
        return res.send("No info")
    }
    for(let i = 0;i<users.length;i++){
        if(users[i].ID === id){
            res.json({
                result:"Founded",
                users_found:users[i]
            })
        }
    
    res.json({
        result:"Not founded"
    })
    }
})

app.listen(port,()=>{
    console.log("This server is running on",port)
})




