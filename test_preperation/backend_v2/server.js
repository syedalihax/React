const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const app = express()

app.use(express.json())


// ----------------------------------------------------------------------
// Mongoose 
// ----------------------------------------------------------------------

mongoose.connect("mongodb://127.0.0.1:27017/company_management")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => {
        console.log(err)
    })
// ----------------------------------------------------------------------
// Schema 
// ----------------------------------------------------------------------

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: 3,
            maxlength: 15,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "Employee"
        },

    },
    {
        collection: "Employees"
    }
)


// ----------------------------------------------------------------------
// Model 
// ----------------------------------------------------------------------

const Employee = mongoose.model("Employee", employeeSchema)

// ----------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------

app.post("/register", async (req, res) => {

    try {

        const clientData = req.body
        const hashedPassword = await bcrypt.hash(clientData.password, 10)
        clientData.password = hashedPassword
        const SavedEmployee = await Employee.create(clientData)
        res.status(201).json(
            {
                success: true,
                message: "User Registered successfully",
                _id: SavedEmployee._id,
                name: SavedEmployee.name,
                email: SavedEmployee.email,
                role: SavedEmployee.role,

            }
        )

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

});

app.get("/users", async (req, res) => {
    try {
        const users = await Employee.find().select("-password")
        res.status(200).json({
            success: true,
            message: "All users data collected successfully",
            data: users

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

app.post("/login", async (req, res) => {
    try {
        const clientData = req.body;
        const user = await Employee.findOne({
            email: clientData.email
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        const passwordMatched  = await bcrypt.compare(clientData.password, user.password)
        if (!passwordMatched ) {
            return res.status(401).json({
                success: false,
                message: "invalid Password"
            })
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
});

app.listen(3500, () => {
    console.log("server is running...")
})

