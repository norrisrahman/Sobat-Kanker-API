var Obat = require('../models/obat.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.informasi_umum) {
        res.status(400).send({message: "Informasi Umum can not be empty"});
    }

    var obat = new Obat({informasi_umum: req.body.informasi_umum || "Untitled Obat", keterangan_konsumsi: req.body.keterangan_konsumsi});

    obat.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Obat."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Obat.find(function(err, schedules){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Obat."});
        } else {
            res.send(schedules);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Obat.findById(req.params.obatId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Obat with id " + req.params.obatId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Obat.findById(req.params.obatId, function(err, obat) {
        if(err) {
            res.status(500).send({message: "Could not find a Obat with id " + req.params.obatId});
        }

        obat.informasi_umum = req.body.informasi_umum;
        obat.keterangan_konsumsi = req.body.keterangan_konsumsi;

        schedule.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.obatId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Obat.remove({_id: req.params.obatId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });
};

