var Schedule = require('../models/schedule.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.tanggal) {
        res.status(400).send({message: "Date can not be empty"});
    }

    var schedule = new Schedule({tanggal: req.body.tanggal || "Untitled Schedule", jam: req.body.jam});

    schedule.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Schedule."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Schedule.find(function(err, schedules){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Schedule."});
        } else {
            res.send(schedules);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Schedule.findById(req.params.scheduleId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Schedule with id " + req.params.scheduleId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Schedule.findById(req.params.scheduleId, function(err, schedule) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.scheduleId});
        }

        schedule.tanggal = req.body.tanggal;
        schedule.jam = req.body.jam;

        schedule.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.scheduleId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Schedule.remove({_id: req.params.scheduleId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });
};

