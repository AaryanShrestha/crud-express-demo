const mongoose = require ('mongoose');
const Users = require('./Users');

const ReviewSchema = new mongoose.Schema({
    reviewDetail: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
});

module.exports = mongoose.model("Reviews", ReviewSchema);