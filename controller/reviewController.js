const Review = require('../model/Reviews');

const postReview = async (req, res, next) => {
    const newReview = req.body;
    try {
        const review = await new Review(newReview).save();
        res.json({message: review, state: "Posted sucessfully."});
    } catch (err) {
        console.log(err);
    }
};

const getReview = async (req, res, next) => {
    try {
        const review = await Review.find();
        res.json({message: review});
    } catch (err) {
        console.log(err);
    }
};

const getOneReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);
        res.json({message: review});
    } catch (err) {
        console.log(err);
    }
};

const updateReview = async (req, res, next) => {
    const patchReview = {
        reviewDetail: req.body.reviewDetail
    };
    try {
        const updateReview = await Review.findByIdAndUpdate({_id: req.params.id}, {$set: patchReview});
        res.json({message: "completed"});
    } catch (err) {
        console.log(err);
    }
};

const deleteReview = async (req, res, next) => {
    try {
        const review = await  Review.findByIdAndDelete(req.params.id);
        res.json({message: review, state: "deleted sucessfully."})
    } catch (err) {
        console.log(err);
    }
};

module.exports = {postReview, getReview, getOneReview, updateReview, deleteReview};