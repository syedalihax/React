const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const app = express()

app.use(express.json())


// ----------------------------------------------------------------------
// Mongoose 
// ----------------------------------------------------------------------

mongoose.connect("mongodb://127.0.0.1:27017/company_management")
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})
// ----------------------------------------------------------------------
// Schema 
// ----------------------------------------------------------------------

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            minlength : 3,
            maxlength : 15,
            required : true
        },
        email:{
            type : String,
            required : true
        },
        password:{
            required : true
        },
        role:{
            type: String,
            default : "Employee"
        },
        
    },
    {
        collection : "Employees"
    }
)


// ----------------------------------------------------------------------
// Model 
// ----------------------------------------------------------------------

const Employee = mongoose.model("Employee" , employeeSchema )

// ----------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------

app.listen(3000 , ()=>{
    console.log("server is running...")
})

