const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const enquiryController = require('../src/controller/enquiry.controller');
const auth = require('../middleware/auth');  

// const uservalidate = require('../middleware/validate.middelware');
// const schemas = require('../src/validation/document.validate');

// // Imports the Google Cloud client library
// const { Storage } = require('@google-cloud/storage');
// // Creates a client
// const gspstorage = new Storage({
//   keyFilename: path.join(__dirname + '/../config', process.env.GCS_KEY_FILE_NAME),
//   projectId: process.env.GCS_PROJECT_ID
// });

// var storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//     callBack(null, './assets/siteDocuments/')
//   },
//   filename: (req, file, callBack) => {
//     callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     // console.log('mime ',file.mimetype)
//     // console.log('file>>>>>>>>> ', file)
//     if (file.mimetype == "application/pdf" || file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/JPEG") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only pdf and images allowed!'));
//     }
//   }
// });
//[upload.single("documentFile")]

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 100* 1024 * 1024 } }); // 100MB limit

router.get('/file/:image', function (request, response, next) {
    const bucket = gspstorage.bucket(process.env.GCS_BUCKET_NAME);
    let filePath = "assets/siteDocuments/" + request.params.image;
    var stream = bucket.file(filePath).createReadStream();
  
    if (path.extname(request.params.image) == ".pdf") {
      response.writeHead(200, { 'Content-Type': 'application/pdf' });
    } else if (path.extname(request.params.image) == ".jpg" || path.extname(request.params.image) == ".jpeg") {
      response.writeHead(200, { 'Content-Type': 'image/jpg' });
    } else if (path.extname(request.params.image) == ".png") {
      response.writeHead(200, { 'Content-Type': 'image/png' });
    }
  
    stream.on('data', function (data) {
      // console.log("MY IMAGE RESPONSE ",data);
      response.write(data);
    });
  
    stream.on('error', function (err) {
      console.log('error reading stream', err);
    });
  
    stream.on('end', function () {
      response.end();
    });
});

router.get('/mediaList', function (request, response, next) {
    enquiryController.getMediaList(request, response, next);
});
router.post("/create", upload.single('uploadMediaFile'), function (request, response, next) {
    enquiryController.createEnquiry(request, response, next)
});

router.get('/', [auth.login],function (request, response, next) {
    enquiryController.getEnquiryListByFilter(request, response, next);
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
