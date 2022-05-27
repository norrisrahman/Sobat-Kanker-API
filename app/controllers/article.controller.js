var Article = require('../models/article.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.title) {
        res.status(400).send({message: "Title can not be empty"});
    }

    var article = new Article({title: req.body.title || "Untitled Title", content: req.body.content});

    article.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Article."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Article.find(function(err, articles){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Article."});
        } else {
            res.send(articles);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Article.findById(req.params.articleId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Article with id " + req.params.articleId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Article.findById(req.params.articleId, function(err, article) {
        if(err) {
            res.status(500).send({message: "Could not find a Article with id " + req.params.articleId});
        }

        article.title = req.body.title;
        article.content = req.body.content;

        postingan.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update Article with id " + req.params.articleId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Article.remove({_id: req.params.articleId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete Article with id " + req.params.id});
        } else {
            res.send({message: "Article deleted successfully!"})
        }
    });
};

