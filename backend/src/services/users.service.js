const { QueryTypes } = require('sequelize');
let userDataProvider = {

  loginUser: async (userdata) => {
    return new Promise(function (resolve, reject) {
      conn.Users.findOne({
        where: userdata,
        attributes: { exclude: ['password'] },        
      })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

}

module.exports = userDataProvider;
