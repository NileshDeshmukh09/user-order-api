
/**
 *  The routes for the Home 
 *  Resource
 */

const express = require("express");
const authController = require("../controllers/auth.controller");
const {  signupValidation } = require("../middlewares");
const router = express.Router();

 
 
 /** Signup -- GET */
router.post("/auth/add-user", [signupValidation.validateRequest ] , authController.signup );
 
 /** signin -- GET */
router.post("/auth/login-user" , authController.signin );
 


module.exports = router