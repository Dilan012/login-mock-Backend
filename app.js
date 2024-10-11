const express = require('express')
const app = express()
const bodyparser = require("body-parser")
const port = 3001
const cors = require('cors');

const users = [
    {email: "dilan@123.com",name: "Dilan",password: "dilan123",role: "user"},
    {email: "admin@123.com",name: "Admin User",password: "adminpass",role: "admin", },
    {email: "guest@123.com",name: "Guest User",password: "guestpass",role: "guest",},
]

app.use(bodyparser.json())
app.use((req, res, next)=>{console.log("work")
next()})
app.get('/', (req,res, next)=>{
    res.json({message:"entry point"})
})
app.post('/login', (req, res) => {
    console.log(req.body)

    const {email, password} = req.body
    const user = users.find((user)=> user.email == email)
    if(user){
        if(user.password === password) res.status(200).json(user)
        else res.status(401).json({field:"password", Error:"invalid Password"})
    }else{
        res.status(404).json({field:"username",Error:"User Not Found"})
    }
})  

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})