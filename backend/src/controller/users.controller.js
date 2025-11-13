const md5 = require('md5-nodejs');
const jwt = require('jsonwebtoken');
const moment = require("moment");
// var crypto = require("crypto");
// const helper = require('../utils/helper');
const responder = require('../utils/responder');
const usersService = require('../services/users.service');

let userController = {

  loginUser: async (request, response, next) => {
    try {
    console.log("HHHHHHHHHHHHHHHHHHHHHH", request.body)
      let password=  request.body.password;
      let email=  request.body.email;

      if(email == '' || password == ''){
        responder.sendResponse(response, 400, "error", null, "Password and email can't be empty.");
        return false;
      }
      let base64string = request.body.password;
      let bufferObj = Buffer.from(base64string, "base64");
      let decodedString = bufferObj.toString("utf8");

     // console.log("decoded data---->",decodedString)
 
      if(decodedString=='' || email=='' || password == '')
       {
        responder.sendResponse(response, 400, "error", null, "Password and email can't be empty.");
       }
       else{
            // var hash = md5(password).toString();
            var hash = md5(decodedString).toString();
            // console.log('has>> ', hash);
            const userData = {
                userEmail      : request.body.email,
                userPassword   : hash,
                isDeleted      :  0,                
            };
            let findUser = await usersService.loginUser(userData);
            /// console.log("find user ",findUser)
            if((findUser!==null) && (findUser.id!==''))
            {
                if(findUser.status==1){
                    let user={
                        userName:findUser.userName,
                        userEmail:findUser.userEmail,
                        userId: findUser.id,
                    }
                // console.log("USER JWT ::",user)
                let token= await genereateToken(user);

                // let permissions = JSON.parse((findUser.Role).role_permissions);
                let userPermission = {};    //await usersService.findAllPermissionGivenUser(null,permissions);
                responder.sendResponse(response, 200, "success", {type:"activated",token:token,userName:findUser.userName, userEmail:findUser.userEmail, userId: findUser.id, userPermission:userPermission}, "Valid User login.");
                }else{
                responder.sendResponse(response, 200, "error", {type:"deactivated"}, "This user deactivated please contact to admin");
                }   
            }
            else{
                responder.sendResponse(response, 200, "error", {type:"Unauthorized"}, "Unauthorized User.");
            }              
       }    
    } catch (error) {
            console.log(error)
            return next(error);
      }
  },
  regenerateToken: async (request, response, next) => {
    try {
    // console.log("HHHHHHHHHHHHHHHHHHHHHH")
      let refreshToken=  request.body.refreshToken;     
      if(!refreshToken)
       {
        responder.sendResponse(response, 400, "false", null, "Refresh Token Required");
       }
       else{

         let  refdata= await verifyRefreshToken(refreshToken);
         console.log("refresh token data",refdata)
         let userId= refdata.userId;
         if(userId)
         {
          //const expMin=getTokenExpiresIn(refdata.exp);		  
		  
		let issuedEpoch = parseInt(refdata.iat);
		let expEpoch = parseInt(refdata.exp);
		let currentEpoch = parseInt(moment().unix());
		
		let issuedEpochDiff = currentEpoch - issuedEpoch;
		let expEpochDiff = expEpoch - currentEpoch;

		if(issuedEpochDiff > 60 && expEpochDiff > 0){
            let findUser = await usersService.loginUser(userId);
            console.log("find user ",findUser);
            if((findUser!==null) && (findUser.id!==''))
               {
                    if(findUser.status==1){
                       let user={
                            userName:findUser.userName,
                            userEmail:findUser.userEmail,
                            userId: findUser.id,
                        }
                        let token= await genereateToken(user);
                       
                        // let permissions = JSON.parse((findUser.Role).role_permissions);
                        let userPermission = {};    //await usersService.findAllPermissionGivenUser(null,permissions);
                        // userPermission=userPermission.permissions;
                        responder.sendResponse(response, 200, "true", {type:"activated",token:token}, "Regenerate token  successfully");
                    }else{
                        responder.sendResponse(response, 200, "false", {type:"deactivated"}, "This user deactivated please contact to admin");
                    }   
                }
          }
          else{          
            responder.sendResponse(response, 200, "true", {type:"activated",token:refreshToken}, "Token Not expired");
          }
        }else{
            responder.sendResponse(response, 200, "false", {type:"Unauthorized"}, "Unauthorized User.");
        }              
       }    
    } catch (error) {
        console.log(error)
        return next(error);
    }
  },


};

genereateToken= async (data)=>{
  return new Promise(async function (resolve, reject) {

    // let expTimeData = await conn.Settings.findOne({where: {settingsKey:'token-expiry-time-minutes'}, raw:true});
    let ExpTime=15;
    // if(expTimeData && expTimeData.settingsKey!='' && expTimeData.settingsValue!='')
    // {
    //   ExpTime=expTimeData.settingsValue;
    // }

    jwt.sign(
      data,
      process.env.JWT_KEY,
      {
        expiresIn: ExpTime+"m",
      },(err,token)=>{
          if(err)
          {
            reject(err);
          }
          //store(user.userId, {token:token,blockedToken:null});
         
          resolve(token);
      }
    );
  })
}
genereateRefreshToken= async (data)=>{  
    return new Promise(function (resolve, reject) {
      jwt.sign(
        data,
        process.env.JWT_KEY,
        {
          expiresIn: "1y",
        },(err,token)=>{
            if(err)
            {
              reject(err);
            }
            resolve(token);
        }
      );
    })
}
module.exports = userController;
