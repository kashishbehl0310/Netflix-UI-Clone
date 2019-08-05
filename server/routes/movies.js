const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsersMovieList/:id', userController.returnUserMovieList);
router.get('/testRoute', userController.testRouteController)
router.put('/addToUserList/:id', userController.addToUserList)

module.exports = router;