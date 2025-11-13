const express = require('express');
const router = express.Router();
const userController = require('../src/controller/users.controller');


router.post('/login', function (request, response, next) {
    userController.loginUser(request, response, next);
});
router.post('/regenerateToken', function (request, response, next) {
    userController.regenerateToken(request, response, next);
});


module.exports = router;
