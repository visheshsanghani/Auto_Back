const router = require('express').Router();
let ScoreCard = require('../models/ScoreCard');

router.route('/add').post((req, res) => {
    const UserName = req.body.UserName;
    const UserMail = req.body.UserMail;
    const Examtype = req.body.Examtype;
    const Score = req.body.Score;

    const newScoreCard = new ScoreCard({
        UserName,
        UserMail,
        Examtype,
        Score,
    });

    newScoreCard.save()
        .then(() => res.json('Score card added !'))
        .catch(err => res.status(400).json('Error : ' + err));
})

module.exports = router;