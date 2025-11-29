var momentz = require('moment-timezone');
const responder = require('../utils/responder');
const faqCategoryService = require('../services/faqCategory.service');
const moment = require('moment');

let FaqCategoryController = {

    getCategoryList: async (request, response, next) => {
        try {
            const dataList = await faqCategoryService.getFaqCategoryList(true);
            return responder.sendResponse(response, 200, "success", dataList, "Category List retrieved successfully.");
        } catch (error) {
            return next(error);
        }
    },
    getCategoryDDList: async (request, response, next) => {
        try {
            let categoryList = await faqCategoryService.getFaqCategoryList();
            return responder.sendResponse(response, 200, "success", categoryList, "Category List retrieved successfully.");
        } catch (error) {
            return next(error);
        }
    },
    
    createCategory: async (request, response, next) => {
        try {
            console.log('create controller reached', request.body, request.user);
            let checkIfExist = false;
            checkIfExist = await faqCategoryService.checkExistFaqCategory(request.body.name);
            if (checkIfExist == true) {
                return responder.sendResponse(response, 200, "error", '', "Category Already Exist");
            } else {
                const categoryData = {
                    name: request.body.name.trim(),
                    createdBy: request.user.userId
                };
                let categoryCreate = await faqCategoryService.createFaqCategory(categoryData);
                return responder.sendResponse(response, 200, "success", categoryCreate, "Category created successfully.");
                
            }
        } catch (error) {
            return next(error);
        }
    },
    


};

module.exports = FaqCategoryController;
