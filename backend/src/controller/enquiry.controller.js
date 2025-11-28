var momentz = require('moment-timezone');
const responder = require('../utils/responder');
const enquiryService = require('../services/enquiry.service');
const { uploadBufferToS3, uploadS3, listS3Objects } = require('../utils/s3');
const moment = require('moment');

let EnquiryController = {

    getMediaList:async(request, response, next)=>{
        let basePath = process.env.S3_BASE_PATH || '';
        let s3_result = await listS3Objects(basePath);
        if(s3_result){
            return responder.sendResponse(response, 200, "success", s3_result, "MediaList fetched successfully.");
        }else{
            return responder.sendResponse(response, 200, "error", {}, "MediaList fetched failed.");
        }
    },
    getEnquiryListByFilter: async (request, response, next) => {
        try {
            let documentData = await enquiryService.getEnquiryListByFilter(request);
            return responder.sendFilterResponse(response, 200, "success", documentData, "Enquiry List retrieved successfully.");
        } catch (error) {
            return next(error);
        }
    },
    
    validateEnquiry: async (request, response, next) => {
    try {
        console.log('validate controller reached', request.body);
        let checkIfExist = false;
        checkIfExist = await enquiryService.checkExistEnquiry(request.body.contact, request.body.email);
        if (checkIfExist == true) {
            return responder.sendResponse(response, 200, "error", '', "Enquiry Already Exist for this contact number or email");
        } else {
            return responder.sendResponse(response, 200, "success", {}, "No Enquiry Found");
        }
    } catch (error) {
        return next(error);
    }
    },
    createEnquiry: async (request, response, next) => {
    try {
        console.log('create controller reached', request.body, request.file);
        let checkIfExist = false;
        checkIfExist = await enquiryService.checkExistEnquiry(request.body.contact, request.body.email);
        if (checkIfExist == true) {
            return responder.sendResponse(response, 200, "error", '', "Enquiry Already Exist for this contact number or email");
        } else {

            // const tmpFilename = request.file.filename;
            // let documentFilePath = '';
            // let extList=['jpeg','jpg','png', 'pdf'];
            // let Imgext= request.file.filename.split('.').pop();

            // if(extList.includes(Imgext.toLowerCase())){   
                // let documentFilePath = '';
                // if (request.file) {
                //     let s3_result = await uploadS3(request.file.buffer, request.file.originalname,
                // request.file.mimetype);
                //     documentFilePath = s3_result.fileName;
                //     console.log('documentFilePath', documentFilePath);
                // }

                let dob = '';
                if(request.body.dob){
                    dob = moment(request.body.dob).format('YYYY-MM-DD');
                }
                const enquiryData = {
                    name: request.body.name,
                    dob: dob,
                    contact: request.body.contact != '' ? request.body.contact.trim() : null,
                    email: request.body.email != '' ? request.body.email.trim() : null,
                    stateId: request.body.stateId != '' ? request.body.stateId : null,
                    cityId: request.body.cityId != '' ? request.body.cityId : null,                    
                    address: request.body.address != '' ? request.body.address.trim() : null,
                    pincode: request.body.pincode != '' ? request.body.pincode.trim() : null,
                    interest_in_role: request.body.interest_in_role != '' ? request.body.interest_in_role.trim() : null,
                    other_roles: request.body.other_roles != '' ? request.body.other_roles.trim() : null,
                    story: request.body.story != '' ? request.body.story.trim() : null,
                    dream_remarks: request.body.dream_remarks != '' ? request.body.dream_remarks.trim() : null,
                    how_to_know_about_this : request.body.how_to_know_about_this ? request.body.how_to_know_about_this : null,
                    i_confim : 1,
                    read_tnc : 1,
                    agree_tnc : 1,
                    media_url: request.body.videoUrl ? request.body.videoUrl : '',
                    status: 1
                };
                let enquiryCreate = await enquiryService.createEnquiry(enquiryData);
                return responder.sendResponse(response, 200, "success", enquiryCreate, "Enquiry created successfully.");
            // }else{
            //     responder.sendResponse(response, 200, "error", '', "Only Image OR PDF allowed.");
            // }
        }
    } catch (error) {
        return next(error);
    }
    },
};

module.exports = EnquiryController;
