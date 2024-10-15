const express = require("express")

const route = express.Router();
const stucontroller = require("../Controllers/studentController")

route.post("/studentSave",stucontroller.StudentSave)

module.exports =route