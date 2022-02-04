const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
    },
    answer: [{
        _id: false,
        name: {
            type:String
        },
        image: {
            type:String
        }
    }],
    hint: {
        type: String,
    },
    difficulty: {
        type: String,
    }
})

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;