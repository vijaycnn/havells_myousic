const express = require('express');
const Joi = require('joi')
const router = express.Router();
const userController = require('../src/controller/users.controller');
const uservalidate = require('../middleware/validate.middelware');

const schemas = {
    updateForgotPassword: Joi.object({    
        emailId: Joi.string().regex(/^[ A-Za-z0-9_@./#&+-]*$/).required()
        .messages({
            'string.pattern.base': `Enter valid email id`
        }),   
        resetPasswordToken: Joi.string().required(),
        //  newPassword: Joi.string().regex(/^[ A-Za-z0-9_@./#&+-]*$/).required()
        newPassword: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required().messages({
            'string.pattern.base': `Password should have alphanumaric and one special charactor and minimum length 8`
        }),
        confirmPassword: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required()
        .messages({
            'string.pattern.base': `Password should have alphanumaric and one special charactor and minimum length 8`
        }),  
    }),

}
router.post('/login', function (request, response, next) {
    userController.loginUser(request, response, next);
});
router.post('/regenerateToken', function (request, response, next) {
    userController.regenerateToken(request, response, next);
});

router.post('/generateForgotPasswordLink', function (request, response, next) {
    userController.generateForgotPasswordLink(request, response, next);
});
router.get('/forgotPasswordLinkVerify/:id', function (request, response, next) {
    userController.forgotPasswordLinkVerify(request, response, next);
});
router.post('/updateForgotPassword',[uservalidate(schemas.updateForgotPassword,'')], function (request, response, next) {
    userController.updateForgotPassword(request, response, next);
});

module.exports = router;
