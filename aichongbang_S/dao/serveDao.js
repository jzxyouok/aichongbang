const { serviceModel } = require('./models/serviceModel.js');

//增加服务类型
module.exports.addService = async function (data) {
    console.log(data)
  return await serviceModel.create(data);
}

