const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema:

// 1. This code defines a schema called ItemSchema using Mongoose’s Schema class. 
// The schema represents how each document (or "item") in the MongoDB collection will be structured.

// 2. Field Definitions
// name field:
// type: String: This specifies that the name field must be a string.
// required: true: This makes the name field mandatory.

// date field:
// type: Date: This specifies that the date field must be a date.
// default: Date.now: This sets the default value of the date field to the current date and time. 
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Export this model so that other file can use it
module.exports = Item = mongoose.model('item', ItemSchema);