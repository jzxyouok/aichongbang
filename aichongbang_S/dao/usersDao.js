const { userModel } = require('./models/userModel.js');
//登录
module.exports.login = async function (data) {
   let result = await userModel.find(data);
   return result;
}

//注册
module.exports.reg = async function (data) {
   let result = await userModel.create(data);
   return result;
}

//获取用户
module.exports.getUser = async function ({ currentPage, eachPage, userStatus }) {
   let count, users
   if (userStatus === undefined) {
      count = await userModel.find().countDocuments();  // 总条数
      users = await userModel
         .find()
         .skip((currentPage - 1) * eachPage)
         .limit(eachPage - 0)
   } else {
      count = await userModel.find({ userStatus }).countDocuments();  // 总条数
      users = await userModel
         .find({ userStatus })
         .skip((currentPage - 1) * eachPage)
         .limit(eachPage - 0)
   }
   totalPage = Math.ceil(count / eachPage); // 总页数
   let pageData = {
      currentPage: currentPage - 0,  // 当前页码
      eachPage: eachPage - 0,  // 每页显示条数
      totalPage: totalPage - 0,   // 总页数
      count: count - 0, // 总条数
      users  // 用户数据
   };

   return pageData;
}

//修改用户
module.exports.updateUser = async function (id) {
   return await userModel.updateOne(id, { userStatus: 1 });
}


//批量删除后台用户
module.exports.deletes = async function (id) {
   return await userModel.remove({ _id: { $in: id._id } });
}

//新增前台用户
module.exports.addFrontUser = async function (user) {
   let result = await userModel.create(user);
   return result;
}

//修改用户
module.exports.updates = async function ({ _id, password }) {
   return await userModel.updateOne({ _id }, { password });
}
