const express = require("express")
const App = express();
require("dotenv").config();
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const cors = require('cors');
App.use(cors({ origin: 'http://localhost:5173' }));
const port = process.env.PORT || 3000

const sturoute = require("./routes/Studentroute")
App.use(cors());

App.use(bodyparser.urlencoded({extended: true}));
App.use(bodyparser.json())
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DB SuccesFully Connected ")
})

App.use("/student",sturoute)

App.listen(port ,()=>{
    console.log(`App Run On Port ${port}`)
})