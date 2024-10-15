const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
    roll:{
        type:"Number",
        require:true
    },
    na:{
        type:"String",
        require:true
    },
    sc:{
        type:"String",
        require:false
    },
    pa:{
        type:"Number",
        require:true
    }
})

module.exports = mongoose.model("student",stuSchema)