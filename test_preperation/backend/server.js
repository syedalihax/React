const express = require("express")
const app = express()

app.use(express.json())

let students = []



app.get('/students', (req, res) => {
    res.send(students)
})

app.post('/students', (req, res) => {
    console.log("Method: " + req.method)
    console.log("Url: " + req.url)
    console.log(req.body)

    students.push(req.body)
    console.log("Student Added")
    let newStudent = req.body.name
    res.json({
        success: true,
        message: `Student ${newStudent} registered successfully`
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
