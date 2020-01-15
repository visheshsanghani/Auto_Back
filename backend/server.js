const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

const API_PORT = 3002;
const app = express();
app.use(cors());
app.use(express.json());
// const router = express.Router();

// this is our MongoDB database
const dbRoute =
  'mongodb+srv://visheshsanghani:visheshsanghani@testcluster-t7eww.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true  , useUnifiedTopology: true} );

const connection = mongoose.connection;

connection.once('open' , () =>{
  console.log("MongoDB database is connected");
})

const questions = require('./routes/questions');
const users = require('./routes/users');
const scorecard = require('./routes/scorecard');

// app.use('/questions' , questions);
app.use('/questions' , questions);
app.use('/users', users);
app.use('/scorecard', scorecard);

app.listen(API_PORT , () =>{
  console.log(`Server is running on : ${API_PORT}`)
});