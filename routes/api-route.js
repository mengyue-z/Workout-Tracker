const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .sort({
    day:-1
  })
  .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(JSON.stringify(dbWorkout, null, 2));
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    {_id: req.params.id},
    {
      $push: {exercises:req.body}
    },
    {new:true, runValidators: true}
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
