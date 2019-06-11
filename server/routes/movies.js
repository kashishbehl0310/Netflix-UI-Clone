const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsers/:id', userController.returnUser);
router.put('/addToUserList/:id', userController.addToUserList)

module.exports = router;