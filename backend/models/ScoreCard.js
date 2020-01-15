const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const TestSchema = new Schema({
    UserName :{
        type : String ,
        required : true,
        trim : true,
    },
    UserMail:{
        type : String ,
        required : true ,
        minlength : 8 ,
        trim : true,
    },
    Examtype : {
        type : String ,
        required : true
    },
    Score :{
        type : Number ,
        required : true
    },
},
    {
        timestamps : true
    }
);

const ScoreCard= mongoose.model('ScoreCard' , TestSchema);

module.exports = ScoreCard;