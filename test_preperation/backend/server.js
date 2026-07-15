const express = require("express");

const app = express();

app.use((req, res, next) => {

    console.log("Middleware Chala");

    next();

});

app.get("/", (req, res) => {

    res.send("Home");

});

app.post("/users", (req, res) => {

    console.log(req.body);

    res.send(req.body);

});

app.listen(3000, () => {
    console.log("Server Running...");
});