const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const app = express()

app.use(express.json())