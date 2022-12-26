const User = require('../model/Users');

const postUser = async (req, res, next) => {
    const newUser = req.body;
    try {
        const user = await new User(newUser).save();
        res.json({message: user, state: "Posted sucessfully."});
    } catch (err) {
        console.log(err);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.json({message: user});
    } catch (err) {
        console.log(err);
    }
};

const getOneUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({message: user});
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (req, res, next) => {
    const patchUser = {
        userName: req.body.userName,
        gender: req.body.gender
    };
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id}, {$set: patchUser}).save();
        res.json({message: "completed"});
    } catch (err) {
        res.json(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({message: user, state: "deleted sucessfully."})
    } catch (err) {
        console.log(err);
    }
};

module.exports = {postUser, getUser, getOneUser, updateUser, deleteUser};