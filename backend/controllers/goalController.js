// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getAllGoals = (req, res) => {
    res.status(200).json({ message: 'Get all goals' });
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Create a Goal' });
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoalById = (req, res) => {
    res.status(200).json({ message: `Update a Goal by ID: ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoalById = (req, res) => {
    res.status(200).json({ message: `Delete a Goal by ID: ${req.params.id}` });
};

module.exports = { getAllGoals, setGoal, updateGoalById, deleteGoalById };