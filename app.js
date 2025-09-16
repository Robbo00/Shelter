const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, 'shelter.html'))
})

app.listen(5000, ()=>{
    console.log('http://localhost:5000')
})