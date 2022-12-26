const Product = require('../model/Products');

const postProduct = async (req, res, next) => {
    const newProduct = req.body;
    try {
        const product = new Product(newProduct).save();
        res.json({message: product, state: "Posted sucessfully."});
    } catch (err) {
        console.log(err);
    }
};

const getProduct = async (req, res, next) => {
    try {
        const product = await Product.find();
        res.json({message: product});
    } catch (err) {
        console.log(err);
    }
};

const getOneProduct = async (req, res, next) => {
    try {
        const product = Product.findById(req.params.id);
        res.json({message: product});
    } catch (err) {
        console.log(err);
    }
};

const updateProduct = async (req, res, next) => {
    const patchProduct = {
        productPrice: req.body.productPrice,
        reviewId: req.body.reviewId
    }
    try {
        const updateProduct = await Product.findByIdAndUpdate({_id: req.params.id}, {$set: patchProduct});
        res.json({message: "updated successfully."})
    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const product = Product.findByIdAndDelete(req.params.id);
        res.json({message: product, state: "deleted sucessfully."})
    } catch (err) {
        console.log(err);
    }
};

module.exports = {postProduct, getProduct, getOneProduct, updateProduct, deleteProduct};