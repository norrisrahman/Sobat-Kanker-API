var mongoose = require('mongoose');

var ScheduleSchema = mongoose.Schema({
    userId: {type: String, required: true},
    tanggal: String,
    jam: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
