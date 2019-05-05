const { usersModel } = require('./models/usersModel.js');

//前台登陆
module.exports.login = async function (info) {
   let result = await usersModel.find(info);
   return result;
}
//后台登陆
module.exports.blogin = async function (info) {
   let result = await usersModel.find(info);
   return result;
}
//注册
module.exports.register = async function (info) {
   let result = await usersModel.create(info);
   return result;
}
//获取后台用户
module.exports.getUsers = async function ({ currentPage, eachPage }) {
   let result = await usersModel.find();

   let count = await usersModel.countDocuments();  // 总条数
   let totalPage = Math.ceil(count / eachPage); // 总页数
   let users = await usersModel
      .find()
      .skip((currentPage - 1) * eachPage)
      .limit(eachPage - 0)
   let pageData = {
      currentPage: currentPage - 0,  // 当前页码
      eachPage: eachPage - 0,  // 每页显示条数
      totalPage: totalPage - 0,   // 总页数
      count: count - 0, // 总条数
      users  // 用户数据
   };

   return pageData;
}
//批量删除后台用户
module.exports.deletes = async function (id) {
   return await usersModel.remove({ _id: { $in: id._id } });
}

//新增前台用户
module.exports.addFrontUser = async function (user) {
   let result = await usersModel.create(user);
   return result;
}

//修改用户
module.exports.updates = async function ({ _id, password }) {
   return await usersModel.updateOne({ _id }, { password });
}
//通过id获取当前登陆的用户
module.exports.getUserById = async function (id) {
   let result = await usersModel.find(id);
   return result;
}

// 判断手机号是否存在
module.exports.phoneIsExist = async function (info) {
   return await usersModel.find(info);
}

//修改用户信息
module.exports.userupdates = async function ({ _id, password }) {
   return await usersModel.updateOne({ _id }, { password });
}