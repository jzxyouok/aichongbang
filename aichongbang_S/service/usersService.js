const { reg,login,blogin, register, getUsers, deletes, addFrontUser, updates, userupdates, getUserById, phoneIsExist } = require('../dao/usersDao.js');

//后台登陆
module.exports.login = async function (info) {
   let data = await login(info)
   if (data.length > 0 && data[0].status == 1) {
      return data;
   } else {
      return false;
   }
}

//注册
module.exports.reg = async function (data) {
   return await reg(data)
}


// 判断手机号是否存在
module.exports.phoneIsExist = async function (info) {
   let data = await phoneIsExist(info)
   if (data.length > 0) {
      return false
   } else {
      return true
   }
}

//修改用户信息
module.exports.userupdates = async function (user) {
   return await userupdates(user)
}

