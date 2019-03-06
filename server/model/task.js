const mongoose = require('mongoose');
var Task = mongoose.model('Task', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    images: [
        {
            type: String,
            required: true,
            minlength: 1
        }
    ]
})
module.exports = { Task };