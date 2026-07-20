const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/backend_practice")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });



// =======================
// RULES
// =======================

const Rules = new mongoose.Schema(
    {

        name: {
            type : String,
            required : true
        },

        age:{
            type : Number, 
            required : true
        }

    },
    {
        collection: "StudentsCollection"
    }
);



// =======================
// WORKER
// =======================

const Model = mongoose.model("Student", Rules);



// =======================
// ROUTE
// =======================

app.post("/students", async (req, res) => {

    try {

        const Created = await Model.create(req.body);

        res.status(201).json({

            success: true,

            message: "Student Created Successfully",

            data: Created

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

});


app.get("/students", async (req, res) => {

    try {

        const documents = await Model.find();

        res.status(200).json({

            success: true,

            message: "All Student documents collected Successfully",

            data: documents

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

});

app.put("/students/:id", async (req, res) => {
    try {
        const Updated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            success : true,
            message : "Student Updated Succcesfully",
            data: Updated
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

app.patch("/students/:id", async (req, res) => {
    try {
        const PUpdated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            success : true,
            message : "Student Updated Succcesfully",
            data: PUpdated
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

app.delete("/students/:id", async (req, res) => {
    try {
        const Deleted = await Model.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success : true,
            message : "Student Removed Succcesfully",
            data: Deleted
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

app.listen(3000, () => {
    console.log("Server runs https://localhost:3000");

});