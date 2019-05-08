const {goodsModel} =require("./models/goodsModel.js");

module.exports.uploadGood = async function (data) {
   // console.log(data)
   let result = await goodsModel.create(data);
   return result;
}

module.exports.goodsLis = async function ({ currentPage, eachPage }) {

   let count = await goodsModel.find({ goodStatus: 0 }).countDocuments();  // 总条数
   let totalPage = Math.ceil(count / eachPage); // 总页数
   let shops = await goodsModel
       .find({ goodStatus: 0 })
       .skip((currentPage - 1) * eachPage)
       .limit(eachPage - 0).populate('userID')
   let pageData = {
       currentPage: currentPage - 0,  // 当前页码
       eachPage: eachPage - 0,  // 每页显示条数
       totalPage: totalPage - 0,   // 总页数
       count: count - 0, // 总条数
       shops  // 电影数据
   };

   return pageData;
}

