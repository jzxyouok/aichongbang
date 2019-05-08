let { petModel } = require("./model/petModel");

//新增宠主
module.exports.addSpoiTheMain = async function (parm) {
    return await petModel.create(parm);
}

//删除宠主
module.exports.removeSpoilTheMain = async (_id) => {
    return await petModel.deleteOne(_id);
}

//查询宠主
module.exports.findSpoilTheMain = async function ({ type, text }) {
    return await petModel.find({ [type]: text });
}

//修改
  module.exports.updateSpoilTheMain = async function (info) {
    let { _id, name, address, phone } = info;
    return await petModel.update({ _id }, { name, address, phone })
  }



module.exports.getSpoilTheMainByPage = async ({ currentpage, eachpage }) => {
    let count = await petModel.countDocuments(); //总条数
    let totalpage = Math.ceil(count / eachpage); //总页数

    // 跳过的是当前的页码-1并且乘以每页显示的条数
    let pet = await cinemasModel.find().skip((currentpage - 1) * eachpage).limit(eachpage - 0);
    let pageData = {
      currentPage: currentPage - 0,   //当前页码
      eachPage: eachPage - 0,   //每页显示的条数
      count,     //总的条数
      totalpage,  //总的页数
      pet,   //
    }
    return pageData;
  }