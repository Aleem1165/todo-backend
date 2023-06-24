const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    text:String,
    check:Boolean 
})

const todoCheck = mongoose.model( "todos" , todoSchema)

module.exports = todoCheck