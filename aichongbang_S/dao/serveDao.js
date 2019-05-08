const { serviceModel } = require('./models/serviceModel.js');

//增加服务类型
module.exports.addService = async function (data) {
  console.log(data)
  return await serviceModel.create(data);
}
//获取服务数据
module.exports.getServiceData = async function ({ currentPage, eachPage }) {
  let count = await serviceModel.find().countDocuments();  // 总条数
  let totalPage = Math.ceil(count / eachPage); // 总页数
  let services = await serviceModel
    .find()
    .skip((currentPage - 1) * eachPage)
    .limit(eachPage - 0).populate('userID')
  let pageData = {
    currentPage: currentPage - 0,  // 当前页码
    eachPage: eachPage - 0,  // 每页显示条数
    totalPage: totalPage - 0,   // 总页数
    count: count - 0, // 总条数
    services  // 电影数据
  };
  return pageData;
}

