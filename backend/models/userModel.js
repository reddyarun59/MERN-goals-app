const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type: 'string',
        required: [true, "Please add a name"]
    },
    email:{
        type: 'string',
        required: [true, "Please add a name"],
        unique: true
    },
    name:{
        type: 'string',
        required: [true, "Please add a name"]
    },
    
},{
    timestamps:true
})

module.exports =mongoose.model("User", userSchema)