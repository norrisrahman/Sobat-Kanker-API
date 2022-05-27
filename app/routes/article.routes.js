module.exports = function(app) {

    var article = require('../controllers/article.controller.js');

    // Create a new Note
    app.post('/article', article.create);

    // Retrieve all Notes
    app.get('/article', article.findAll);

    // Retrieve a single Note with noteId
    app.get('/article/:articleId', article.findOne);

    // Update a Note with noteId
    app.put('/article/:articleId', article.update);

    // Delete a Note with noteId
    app.delete('/article/:articleId', article.delete);
}
