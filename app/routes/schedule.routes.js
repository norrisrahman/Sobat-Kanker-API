module.exports = function(app) {

    var schedule = require('../controllers/schedule.controller.js');

    // Create a new Note
    app.post('/schedule', schedule.create);

    // Retrieve all Notes
    app.get('/schedule', schedule.findAll);

    // Retrieve a single Note with noteId
    app.get('/schedule/:scheduleId', schedule.findOne);

    // Update a Note with noteId
    app.put('/schedule/:scheduleId', schedule.update);

    // Delete a Note with noteId
    app.delete('/schedule/:scheduleId', schedule.delete);
}
