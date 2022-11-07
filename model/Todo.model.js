const mongoose = require("mongoose")
require('dotenv').config()

const TodoShema = new mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true},
 tag:{type:String,required:true},
 id:{type:Number,required:true},
 email:{type:String,required:true}

})

const Todo = mongoose.model("todo",TodoShema)

module.exports = {Todo}