var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);
