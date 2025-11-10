const express = require('express');
const router = express.Router();
const locationController = require('../src/controller/location.controller');

//STATE ROUTES
router.get('/stateList', function (request, response, next) {
    locationController.getStateList(request, response, next);
});

//CITY ROUTES
router.get("/city/getByState/:stateId", function (request, response, next) {
    locationController.getByStateCity(request, response, next)
})

module.exports = router;
