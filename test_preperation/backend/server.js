const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

app.get("/" , (req , res)=>{
    res.send("Home Page")
})

mongoose.connect("mongodb://127.0.0.1:27017/backend_practice")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
    try {

        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student Created Successfully",
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

app.listen(3000 , (()=>{
    console.log("server is running on port 3000")
}))