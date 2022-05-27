module.exports = function(app) {

    var reminder = require('../controllers/reminder.controller.js');

    // Create a new Note
    app.post('/reminder', reminder.create);

    // Retrieve all Notes
    app.get('/reminder', reminder.findAll);

    // Retrieve a single Note with noteId
    app.get('/reminder/:reminderId', reminder.findOne);

    // Update a Note with noteId
    app.put('/reminder/:reminderId', reminder.update);

    // Delete a Note with noteId
    app.delete('/reminder/:reminderId', reminder.delete);
}
