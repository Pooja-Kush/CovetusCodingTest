const fs = require('fs');
const users = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/users.json`)
);

// middleware to check body while creating user
const checkBody = (req, res, next) => {
	if(!req.body.firstName || !req.body.lastName || !req.body.age || !req.body.weight || !req.body.height || !req.body.gender) {
		return res.status(400).json({
			status: 'fail',
			message: 'All fields are required'
		});
	}else{		
		console.log("First Name = ", req.body.firstName);
	}
	next();
}

// to get the all users
const getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		requestedAt: req.requestTime,
		results: users.length,
		data: {
			users
		}
	});
}

// to create new user
const createUser = (req, res) => {
	const newId = users[users.length - 1].id + 1;
	const newUser = Object.assign({id: newId}, req.body);

	users.push(newUser);
	fs.writeFile(`${__dirname}/data/users.json`, JSON.stringify(users), err => {
		res.status(201).json({ status: "Success", data: newUser});
	});
}

module.exports = { getAllUsers, createUser, checkBody }