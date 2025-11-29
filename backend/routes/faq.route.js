const express = require('express');
const router = express.Router();
const faqCategoryController = require('../src/controller/faqCategory.controller');
// const faqController = require('../src/controller/faq.controller');
const auth = require('../middleware/auth');  

// const uservalidate = require('../middleware/validate.middelware');

router.get('/categoryList',  [auth.login], function (request, response, next) {
    console.log('list route reached', request.body, request);

    faqCategoryController.getCategoryList(request, response, next);
});
router.get('/categoryDDList', [auth.login], function (request, response, next) {
    faqCategoryController.getCategoryDDList(request, response, next);
});

router.post("/createCategory", [auth.login], function (request, response, next) {
    faqCategoryController.createCategory(request, response, next)
});

// router.get('/filter', function (request, response, next) {
//     enquiryController.getDocumentListByFilter(request, response, next);
// });
// router.post("/getById", [auth.login, uservalidate(schemas.documentGetById, '')], function (request, response, next) {
//     enquiryController.getByIdDocument(request, response, next)
// });
// router.post("/update", [auth.login], upload.any(), function (request, response, next) {
//     enquiryController.updateDocument(request, response, next)
// });
// router.post("/delete", [auth.login, uservalidate(schemas.documentDelete, '')], function (request, response, next) {
//     enquiryController.changeDocumentStatus(request, response, next)
// });
module.exports = router;
