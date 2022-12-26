const mongoose = require('mongoose');
const Users = require('./Users');
const Reviews = require('./Reviews')

const ProductsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productPrice: {
        type:String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    reviewId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews",
    }
});

module.exports = mongoose.model("Products", ProductsSchema);