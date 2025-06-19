import Task from "../models/Tasks.js";
import ApiError from "../utils/ApiError.js";
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id });
        return res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
    }
}

export const createTask = async (req, res) => {
    const { title,completed } = req.body;
    const task = await Task.create({ title,completed,user: req.user._id });
    res.status(201).json(task);
};

// Validar dueño de la tarea en get, update y delete
export const getTask = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
    if (!task) throw new ApiError('Task not found');
    res.json(task);
};

export const updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!task) throw new ApiError('Task not found');
    res.json(task);
};

export const deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!task) throw new ApiError('Task not found');
    res.json({ message: 'Task deleted' });
};


















