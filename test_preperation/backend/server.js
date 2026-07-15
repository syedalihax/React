const express = require("express");

const app = express();

// Middleware
app.use(express.json());

app.post("/users", (req, res) => {

    console.log(req.body);

    res.send(req.body);

});

app.listen(3000, () => {
    console.log("Server Running...");
});