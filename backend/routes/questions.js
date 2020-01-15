// import { Router as router } from 'express';
const router = require('express').Router();
let Question = require('../models/questions');

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const Question = req.body.Question;
    const Option_1 = req.body.Option_1;
    const Option_2 = req.body.Option_2;
    const Option_3 = req.body.Option_3;
    const Correct = req.body.Correct;

    const newQuestion = new Question({
        Question,
        Option_1,
        Option_2,
        Option_3,
        Correct
    });

    newQuestion.save()
        .then(() => res.json('Question added !'))
        .catch(err => res.status(400).json('Error : ' + err));
})

router.route('/:id').get((req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted !'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id)
        .then(question => {
                question.Question = req.body.Question,
                question.Option_1 = req.body.Option_1,
                question.Option_2 = req.body.Option_2,
                question.Option_3 = req.body.Option_3,
                question.Correct = req.body.Correct,

                question.save()
                    .then(() => res.json('Question Updated'))
                    .catch(err => res.status(400).json('Error : ' + err))
        })
        .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;