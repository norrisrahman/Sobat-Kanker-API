require('rootpath')();
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('./app/helpers/jwt');
const errorHandler = require('./app/helpers/errorHandler');

// create express app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology: true,
        
    })
        .then(() => console.log("Mongodb database Connected"))
        .catch(err => console.log(err)
);



mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})


// const uri = "mongodb+srv://gavmac:project-ahoi-there@cluster-ahoi-there.t33qr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log(`Connected to mongo at ${uri}`));

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "API Running"});
});

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./app/controllers/user.controller'));

// global error handler
app.use(errorHandler);

require('./app/routes/note.routes.js')(app);
require('./app/routes/schedule.routes')(app);
require('./app/routes/reminder.routes')(app);
require('./app/routes/article.routes')(app);
require('./app/routes/obat.routes')(app);

const addPORT = 3000; //process.env.PORT

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
