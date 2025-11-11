const { QueryTypes } = require('sequelize');
var fs = require('fs'),
  async = require('async'),
  csv = require('csv');
let EnquiryDataProvider = {

  createEnquiry: async (body) => {
    return new Promise(function (resolve, reject) {
      conn.Enquiries.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  checkExistEnquiry: async (contact, email, id = 0) => {
    return new Promise(function (resolve, reject) {
      conn.Enquiries.findOne({
        where: { 
          // contact: contact.trim(), 
          [conn.Sequelize.Op.or]: [
            { contact: contact.trim() },
            { email: email.trim() },
          ],          
          id: { [Op.not]: id }       
        },
      })
        .then(data => {
          if (data == null) {
            resolve(false);
          } else if (id && data.length == 1) {
            resolve(false);
          } else {
            resolve(true);
          }
        }).catch(err => {
          reject(err);
        });
    });
  },
  getByIdDocument: async (documentId) => {
    return new Promise(function (resolve, reject) {
      conn.Enquiries.findOne({
        where: { id: documentId },
      })
        .then(data => {
          if (data !== null) {
            resolve(data);
          } else {
            reject('No Record found');
          }
        }).catch(err => {
          reject(err);
        });
    });
  },
  updateDocument: async (body) => {
    return new Promise(function (resolve, reject) {
      conn.Enquiries.update({
        title: body.title,
        filePath: body.filePath,
      }, {
        where: { id: body.documentId },
      })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  
  //Use this service to soft delete purpose
  changeDocumentStatus: async (body) => {
    return new Promise(function (resolve, reject) {
      conn.Enquiries.update({
        status: body.status
      }, {
        where: { id: body.documentId },
      })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  //Use this service to hard delete purpose only, if require this 
  deleteDocument: async (documentId) => {
    return new Promise(function (resolve, reject) {
      conn.Enquiries.destroy({
        where: { id: documentId },
      })
        .then(data => {
          if (data !== null) {
            resolve(data);
          } else {
            reject('No Record found');
          }
        }).catch(err => {
          reject(err);
        });
    });
  },
  //Use this service as to get ActiveDocumentList Only, using via filter options also
  getDocumentList: async (search) => {
    return new Promise(async function (resolve, reject) {
      // console.log('search', search);
      let whereFilter = {}; 
      if (search.searchTitle != '') {
        whereFilter = {
          title: { [conn.Sequelize.Op.iLike]: '%' + search.searchTitle + '%' }
        }
      }
      whereFilter = { ...whereFilter, status: 1 }       
      console.log('whereFilter', whereFilter);
      await conn.Enquiries.findAll({
        where: whereFilter,
        order: [['id', 'DESC']],
        // logging:console.log
      })
        .then(async data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  
  getEnquiryListByFilter: async (req) => {
    let offset = req.query.offset;
    let limit = req.query.perPage;
    let filterKeyword = (req.query.filterKeyword) ? req.query.filterKeyword : '';
    let whereconserch = {};

    if (filterKeyword != '') {
      whereconserch = {
        name: { [conn.Sequelize.Op.iLike]: '%' + filterKeyword + '%' }
      }
    }

    let enquiries = await conn.Enquiries.findAndCountAll({
      where: whereconserch,
      include:[
        {
          model: conn.StateMaster,
          attributes: [['name', 'stateName']],
          required: false
        },
        {
          model: conn.CityMaster,
          attributes: [['name', 'cityName']],
          required: false
        }
      ],
      order: [['id', 'DESC']],
      logging:console.log,
      limit: limit,
      offset: offset,
    })
    return { 'totalRecord': enquiries.count, 'list': enquiries.rows };
  },
};
module.exports = EnquiryDataProvider;
