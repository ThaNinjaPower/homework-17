var db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
        });
});

router.post("/api/workouts", function (req, res) {
    console.log("Req body: ");
    console.log(req.body);
    db.Workout.create(req.body)
        .then(dbWorkout => { res.json(dbWorkout) })
        .catch(err => { res.json(err) });
});

router.put("/api/workouts/:id", function(req, res) {
    console.log(req.params.id);
    db.Workout.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $push: {
            exercises: req.body
        }
    })
    .then(dbWorkout => {res.json(dbWorkout);})
    .catch(err => {res.json(err);})
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbRange => { res.json(dbRange); })
        .catch(err => console.log(err));
});

module.exports = router;