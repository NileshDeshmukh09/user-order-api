
/**
 *  The routes for the Home 
 *  Resource
 */

const express = require("express");
const orderController = require("../controllers/order.controller");
const {  JWTAuth } = require("../middlewares");
const router = express.Router();

 
 
 /** Signup -- GET */
router.post("/add-order", [ JWTAuth.verifyToken ] , orderController.createOrder );
 
 /** signin -- GET */
router.get("/get-order/:userID" , [ JWTAuth.verifyToken ] , orderController.getOrderByUserID );
 


module.exports = router