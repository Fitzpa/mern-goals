const express = require("express");
const router = express.Router();
const { getAllGoals, setGoal, updateGoalById, deleteGoalById } = require('../controllers/goalController');

router.get('/', getAllGoals);

router.post('/', setGoal);

router.put('/:id', updateGoalById);

router.delete('/:id', deleteGoalById);


module.exports = router;