const { addService } = require('../dao/usersDao.js');

//增加服务类型
module.exports.addService = async function (data) {
    return await addService(data)
 }
 