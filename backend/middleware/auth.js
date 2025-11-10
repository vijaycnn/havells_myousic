const jwt = require('jsonwebtoken');
module.exports.login = function(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) res.status(401).send({ message: "Please Add token" });
  //return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log(err)

    if (err) res.status(403).send({ message: "Invalid Token",invalid_token:1 });
    //return res.sendStatus(403)
    console.log(user)
    req.user = user

    next()
  })
}

module.exports.setSlugs = (moduleSlug,actionSlug) => {
  console.log(actionSlug,"Hellooooooooo",moduleSlug)
  //next();
  return (req, res, next) => {
    console.log(actionSlug,"Hellooooooooo",moduleSlug)
    req.moduleSlug = moduleSlug;
    req.actionSlug = actionSlug;
    next();
  };
};



module.exports.leadCheckPermission = async function (req, res, next) {
  let userId = req.user.userId;
  let partnerId=req.user.partnerId;
  let roleType = req.user.userRoleType;
  let cities = req.user.cities;
  let rvsfPlantId = req.user.rvsfPlantId;

  let leadId=0;
  //leadId=(req.body.id)?req.body.id:0;


  if((req.body.leadId))
  {
    leadId=req.body.leadId;
  }
  if((req.params.id))
  {
    leadId=req.params.id;
  }
  let whereCon={leadId:leadId};
  let localWhereCon={};
  switch(roleType) {
    case 1:
      // localWhereCon={...localWhereCon};
      // code block
      break;
    case 15:
      // finance user type same as admin user
       localWhereCon={ 
        [conn.Sequelize.Op.and]:[ { 
          [conn.Sequelize.Op.or]:[
            {
              paymentMode: 'DonateToNanhiKali',
              currentStage: {
                [conn.Sequelize.Op.gte]: '7' ,
                [conn.Sequelize.Op.ne]: '100' 
               },
               currentState: {
                 [conn.Sequelize.Op.gte]: '1'
               } ,
            },
            {
              paymentMode:['Cheque', 'Demand Draft'],   ///Cheque, Demand Draft , NEFT, RTGS, IMPS
              currentStage: {
                [conn.Sequelize.Op.gt]: '5' ,
                [conn.Sequelize.Op.ne]: '100' 
              },
            },
            {
              paymentMode: ['NEFT', 'RTGS', 'IMPS'],
              [conn.Sequelize.Op.or]:[
                {
                  currentStage: {
                    [conn.Sequelize.Op.gte]: '7' ,
                    [conn.Sequelize.Op.ne]: '100' 
                  }
                },
                {
                  currentStage: {
                    [conn.Sequelize.Op.eq]: '6', 
                  },
                  currentState: {
                    [conn.Sequelize.Op.eq]: '3'
                  } , 
                }
              ],
            }
          ],
         }
         ]
      };
      break;
  
    case 3:
      localWhereCon={
        //sourcingExecutiveId: null,
        [conn.Sequelize.Op.and]:[ {
          [conn.Sequelize.Op.or]: [ { ccExecutiveId: userId }],
         }
         ]
      };
      // Customer Executive
     break;
    case 4:
    console.log("rourcing Executive callllllllllllllll  #####")
      localWhereCon={
        [conn.Sequelize.Op.and]:[ {
          [conn.Sequelize.Op.or]: [ { sourcingExecutiveId: userId }],
         }
         ]
      };
          // Sourcing Executive 
       break; 
    case 5:
        // Sourcing Head
        localWhereCon={
          [conn.Sequelize.Op.and]:[ {
            [conn.Sequelize.Op.or]: [ { sourcingHeadId: userId }],
           }
           ]
        };
        break;

      case 6:
        // vahan desk executive //, city: {[Op.in]: cities}
         console.log("vahan desk executive")
        localWhereCon={currentStage:'5'
          //   [conn.Sequelize.Op.and]:[
          //    whereconsearch 
          //  ] 
           
        };
        break;   
      case 7:
        // Document Officer
         console.log("Document Officer 123")
        localWhereCon={currentStage:'4',currentState:{[Op.not]:'1'},
          //   [conn.Sequelize.Op.and]:[
          //    whereconsearch 
          //  ]   
        };
        break; 
      case 9:
        //Display del to towing officer  createdAt: {  // towingOfficerId:userId,
          localWhereCon={ 
            [conn.Sequelize.Op.and]:[ { towingOfficerId:userId,
              [conn.Sequelize.Op.or]: [ { currentStage: '6' },{ currentStage: '7' },{ currentStage: '8' },{ currentStage: '9' },{ currentStage: '12' }],
             }
             ]
          };
      break;  
      case 10:
        //Display del to towing officer  createdAt: {  
          localWhereCon={
            [conn.Sequelize.Op.and]:[ { towingPartnerId:partnerId,
              currentStage: '6' , currentState: '3'
             // [conn.Sequelize.Op.or]: [ { currentStage: '6' },{ currentStage: '7' }],
             }
             ]
          };
      break;  
      case 11:
        //Display del to logistic partner  
          localWhereCon={ 
            [conn.Sequelize.Op.and]:[
               { logisticPartnerId:partnerId,
                 [conn.Sequelize.Op.or]: [ 
                  { currentStage: '6' },
                  { currentStage: '7' },
                  { currentStage: '12' }
                 ],
              }
              ]

          }; 
      break;    
      case 14:
        //Display deal to RVSF
        localWhereCon={ 
          [conn.Sequelize.Op.and]:[ { rvsfId:rvsfPlantId}]
        }; 
        break; 
   
      default:
        // code block
  }

  whereCon={...whereCon,...localWhereCon}
  let leads = await conn.Leads.findOne({
    where: whereCon,
    raw: true,
    logging: true,
  });
  if(leads && leads.leadId)
  {
    next();
  }
  else{
    return res.status(401).json({
      message: 'Invalid Access',
      success: false,
      invalid_access:1
   });
  }

   
    
}

module.exports.checkPemission = async function (req, res, next) {
  let moduleSlug=req.moduleSlug;
  let actionSlug=req.actionSlug
  console.log("check permission call")
     let givenPemission =await allPermissions(req, res, next);
     //console.log("check permission here",givenPemission);
     let permission = req.originalUrl;
     console.log(permission)
     // permission = permission.replace("/" + req.session.org, "");
      // let permission1    =       permission.split('/');
      // let currenturl="/"+permission1[3]+"/"+permission1[4];
      let currenturl="/"+moduleSlug+"/"+actionSlug;
      let ck= givenPemission.findIndex(arr => arr.includes(currenturl));
      console.log("Herer ###",ck)
     if( givenPemission.findIndex(arr => arr.includes(currenturl))<0)
     {
      return res.status(401).json({
        message: 'Invalid Access',
        success: false,
        invalid_access:1
    });
     }
     else{
      next();
     }
  //  next()
    
}

var allPermissions = async function (req, res, next) {
  var arr = [];
  let permissions={};
  if(req.user){
  let tokendata =req.user;
   permissions = JSON.parse(tokendata.userPermission);
  }
  let prmissionKey= Object.keys(permissions);
         let moduleList= await getAllModules(prmissionKey);
       // console.log("@@@@@@@@@@@@@@s",moduleList)
        // const activeUsersFullPermission = moduleList.map(async moduledata => {
        //             let moduleSlug = moduledata.moduleName;
        //             let moduleId = moduledata.id;
        //             let permissionAcKeys=permissions[moduleId];
        //             permissionslug = await getGivenPermissionSlug(permissionAcKeys,moduleSlug);
        //             // console.log("permissionslug",{[moduleSlug]:permissionslug})
        //             return permissionslug;

        // })

      //  console.log("with out all ",activeUsersFullPermission)
        
        // const givenPemissions = await Promise.all(activeUsersFullPermission);
        // console.log("find prmission aal",givenPemissions);
        let asd= await getGivenPemissions12(moduleList,permissions).then((data)=>{
          //console.log("Than data ",data)
      return data}).catch(error=>{console.log("errror",error)});
       // console.log("here  @@@@@ ",asd)
       return asd;
}

async function  getGivenPemissions12(moduleList,permissions) {
 
return Promise.all(

  moduleList.map(async moduledata => {
 // moduleList.filter(async function (moduledata) {
      let moduleSlug = moduledata.moduleName;
      let moduleId = moduledata.id;
      let permissionAcKeys=permissions[moduleId];
      let permissionslug = await getGivenPermissionSlug(permissionAcKeys,moduleSlug).then((dt)=>{
        //console.log("DTTTTTTT",dt); 
        return dt;}).catch((err)=>{
         // console.log("dt errororo",err);
          return null;
        });
      // console.log("permissionslug",{[moduleSlug]:permissionslug})
    // console.log("##########",permissionslug)
    // if(permissionslug!=null)

    //     {
    //        console.log("if condition callllll",permissionslug)
    //       return permissionslug;
    //     }

    return permissionslug;


    })
   // return moduleList;
   // console.log("##########",a)
  
  )
}




async function  getGivenPermissionSlug(permissionAcKeys,moduleSlug) {
//  console.log(moduleSlug,"find here $$$",permissionAcKeys)
  return Promise.all(
    permissionAcKeys.map(async actionId => {
      return  await getActionByModule(actionId,moduleSlug)
    })
  );
}

var getActionByModule=async (actionId,moduleSlug)=>{
 //console.log(moduleSlug,"    action id calling----",actionId)
  return new Promise((resolve, reject) => { 
    conn.ModulesActions.findOne({
    where: { id:actionId, status: 1,isDeleted:0 },
     raw:true
  })
    .then(moduleAcData => {
      if(moduleAcData==null){
        // console.log(actionId,"no data fount for given details ",moduleSlug)
         resolve(null);
      }
      else{
      resolve('/'+moduleSlug+'/'+moduleAcData.actionName);
      }
    }).catch(err=>{
       // return null;
      // console.log("error action by module",err)
       resolve(null);
    })

  }) 

}


var getAllModules=async (ids)=>{
  console.log("Calling ############3333333",ids)
  return new Promise((resolve, reject) => { 
    conn.Modules.findAll({
    where: { id:{[conn.Sequelize.Op.in]:ids}, status: 1,isDeleted:0 },
     raw:true
  })
    .then(moduleAcData => {
      //console.log(moduleAcData)
     // return moduleAcData;
        resolve(moduleAcData);
    }).catch(err=>{
      console.log(err)
       // return null;
       reject(null);
    })

  }) 

}


var permissionArrray = (permissions) => {
  return new Promise((resolve, reject) => {
    let arr=[];
    let prmissionKey= Object.keys(permissions);
    // Object.keys(permissions).forEach( function (key){
      let permissionKeyLength=prmissionKey.length;
     // for (let i in prmissionKey) {
        for (let i=0;i< permissionKeyLength;i++) {
        console.log("I Valye $$$$$$$$$$$$$$$$$$$",i,"-----",permissionKeyLength)
        let key =prmissionKey[i];
        conn.Modules.findOne({
         where: { id:key, status: 1,isDeleted:0 }
         // raw:true
       })
         .then(async moduledata => {
           if(moduledata)
           {
               let moduleSlug = moduledata.moduleName;
               let moduleId = moduledata.id;
               let permissionAcKeys=permissions[key];
               let permissionAcKeysLength=permissionAcKeys.length;
              // permissions[key].forEach( function (actionId){ 
               //  for(let j in permissionAcKeys){
                  for(let j=0;j<permissionAcKeysLength;j++){
                   let actionId=permissionAcKeys[j];
                   console.log("all sction array",actionId)
                   conn.ModulesActions.findOne({
                   where: { id:actionId, status: 1,isDeleted:0 },
                    raw:true
                 })
                   .then(moduleAcData => {
                     console.log("module action",moduleAcData)
                     if(moduleAcData)
                     {
                       console.log('/'+moduleSlug+'/'+moduleAcData.actionName);
                       arr.push('/'+moduleSlug+'/'+moduleAcData.actionName);
                     }
   
                   }).catch(error=>{
                        console.log("Error In module action query",error)
                   })
   
                // arr.push('/'+key+'/'+action);
                 }
              // });
           }
           if(i==(permissionKeyLength-1))
           {
             console.log("if condition %%%%%%%%%%%%%%%%%%%%%%")
            resolve(arr);
           }
   
         }).catch(err => {
            console.log("error on module query",err)
         });
       
       }
      // console.log("#########################",arr)
      

  })
}
