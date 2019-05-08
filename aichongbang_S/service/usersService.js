const { reg, getUser, updateUser, login } = require('../dao/usersDao.js');
//登录
module.exports.login = async function (data) {
   return await login(data)
}


//注册
module.exports.reg = async function (data) {
   return await reg(data)
}

//获取用户
module.exports.getUser = async function (data) {
   return await getUser(data)
}


module.exports.updateUser = async function (id) {
   return await updateUser(id)
}