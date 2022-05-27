var Reminder = require('../models/reminder.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.jam) {
        res.status(400).send({message: "Time can not be empty"});
    }

    var reminder = new Reminder({jam: req.body.jam});

    reminder.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Reminder."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Reminder.find(function(err, reminders){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Reminder."});
        } else {
            res.send(reminders);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Reminder.findById(req.params.reminderId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Reminder with id " + req.params.reminderId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Reminder.findById(req.params.reminderId, function(err, reminders) {
        if(err) {
            res.status(500).send({message: "Could not find a reminder with id " + req.params.reminderId});
        }

        reminders.jam = req.body.jam;

        reminders.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update reminder with id " + req.params.reminderId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Reminder.remove({_id: req.params.reminderId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete reminder with id " + req.params.id});
        } else {
            res.send({message: "Reminder deleted successfully!"})
        }
    });
};

