const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getAllGoals = asyncHandler(async (req, res) => {
    if (req.body.text) {
        res.status(200).json({ message: 'Get all goals' });
    } else {
        res.status(400).json({ message: 'Please add a text field.' });
    }
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if (req.body.text) {
        res.status(200).json({ message: 'Create a Goal' });
    } else {
        res.status(400);
        throw new Error("Please add a text field");
    }
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoalById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update a Goal by ID: ${req.params.id}` });
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoalById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete a Goal by ID: ${req.params.id}` });
});

module.exports = { getAllGoals, setGoal, updateGoalById, deleteGoalById };