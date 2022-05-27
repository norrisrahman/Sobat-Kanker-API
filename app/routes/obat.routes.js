module.exports = function(app) {

    var obat = require('../controllers/obat.controller.js');

    // Create a new Note
    app.post('/obat', obat.create);

    // Retrieve all Notes
    app.get('/obat', obat.findAll);

    // Retrieve a single Note with noteId
    app.get('/obat/:obatId', obat.findOne);

    // Update a Note with noteId
    app.put('/obat/:obatId', obat.update);

    // Delete a Note with noteId
    app.delete('/obat/:obatId', obat.delete);
}