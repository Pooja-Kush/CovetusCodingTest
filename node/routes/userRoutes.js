const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.param('id', (req, res, next, val) => {
	console.log(`User ID is ${val}`);
	next();
})

router
	.route('/')
	.get(userController.getAllUsers)
	.post(userController.checkBody, userController.createUser);

module.exports = router;