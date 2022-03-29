const mongoose = require('mongoose');
const { Schema } = mongoose;


//Schema for notes containing it's components and their types
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' //will refer to a particular user
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General" //by default will show general as tag
    },
    date:{
        type: Date,
        default: Date.now  //will show the current date as date
    }
})

module.exports = mongoose.model('notes', NotesSchema)