const express = require('express');
const { postOrder, getOrder, getOneOrder, updateOrder, deleteOrder } = require('../controller/ordercontroller');
const { postProduct, getProduct, getOneProduct, updateProduct, deleteProduct } = require('../controller/productController');
const { postReview, getReview, getOneReview, updateReview, deleteReview } = require('../controller/reviewController');
const { getUser, postUser, getOneUser, updateUser, deleteUser } = require('../controller/userController');

const router = express();

//router for review
router.post('/postreview', postReview);
router.get('/getreviews', getReview);
router.get('/getreviews/:id', getOneReview);
router.patch('/updatereview/:id', updateReview);
router.delete('/deletereview/:id', deleteReview);

//router for users
router.post('/postuser', postUser);
router.get('/getusers', getUser);
router.get('/getusers/:id', getOneUser);
router.patch('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

//router for products
router.post('/:id/postproduct', postProduct);
router.get('/getallproduct', getProduct);
router.get('/getproduct/:id', getOneProduct);
router.patch('/updateproduct/:id', updateProduct);
router.delete('/deleteproduct/:id', deleteProduct);

//router for order
router.post('/postOrder', postOrder);
router.get('/getallorder', getOrder);
router.get('/getorder/:id', getOneOrder);
router.patch('/updateorder/:id', updateOrder);
router.delete('/deleteorder/:id', deleteOrder);

module.exports = router;