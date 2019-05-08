const { serviceModel } = require('./models/serviceModel');

//增加服务类型
module.exports.addService = async function (data) {
    console.log(123)
    console.log(data)
   let result = await serviceModel.find(data);
   return result;
}

