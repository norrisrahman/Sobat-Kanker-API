var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    userId: {type: String, required: true},
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
