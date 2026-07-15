const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
    


app.get('/' , (req , res)=>{
    res.send("Well come")
})

app.get('/students' , (req , res)=>{
    res.send("All Students")
})

app.get('/students/:id' , (req , res)=>{
    console.log(req.params.id)
    res.send(req.params.id)
})

app.post('/students' , (req , res)=>{
    console.log("Method: " + req.method)
    console.log("Url: " + req.url)
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000)
    console.log('server is running on port 3000')

