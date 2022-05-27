var mongoose = require('mongoose');

var ReminderSchema = mongoose.Schema({
    userId: {type: String, required: true},
    jam: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Reminder', ReminderSchema);
 