const { login,blogin, register, getUsers, deletes, addFrontUser, updates, userupdates, getUserById, phoneIsExist } = require('../dao/usersDao.js');

//后台登陆
module.exports.login = async function (info) {
   let data = await login(info)
   if (data.length > 0 && data[0].status == 1) {
      return data;
   } else {
      return false;
   }
}
//前台登陆
module.exports.blogin = async function (info) {
   let data = await blogin(info)
   if (data.length > 0 && data[0].status == 0) {
      return data;
   } else {
      return false;
   }
}
//注册
module.exports.register = async function (info) {
   return await register(info)

}
//获取后台用户
module.exports.getUsers = async function (data) {
   return await getUsers(data)
}

//删除后台用户
module.exports.deletes = async function (id) {
   return await deletes(id)
}

//新增前台用户

module.exports.addFrontUser = async function (user) {
   return await addFrontUser(user)
}

//修改密码
module.exports.updates = async function (id) {
   return await updates(id)
}

module.exports.getUserById = async function (id) {
   return await getUserById(id)
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

