const { addService,getServiceData } = require('../dao/serveDao.js');

//增加服务类型
module.exports.addService = async function (data) {
    return await addService(data)
}
module.exports.getServiceData = async function (data) {
    return await getServiceData(data)
}
