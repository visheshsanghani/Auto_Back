const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestSchema = new Schema({
    Question: {
        type: String,
        // required : true,
        // unique : true ,
        // trim : true ,
        // minlength : 3
    },
    Option_1: {
        type: String
    },
    Option_2: {
        type: String
    },
    Option_3: {
        type: String
    },
    Correct: {
        type: String
    },
},
    {
        timestamps: true
    }
);

const Question = mongoose.model('Quest', QuestSchema);

module.exports = Question;