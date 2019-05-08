let { petModel } = require("./models/petModel");

//新增宠物
module.exports.addpet = async function (parm) {
    return await petModel.create(parm);
}

//删除宠物
module.exports.removepet = async (_id) => {
    return await petModel.deleteOne(_id);
}

//查询宠物
module.exports.findpet = async function ({ type, text }) {
    return await petModel.find({ [type]: text });
}

//修改
  module.exports.updatepet = async function (info) {
    let { _id, name, address, phone } = info;
    return await petModel.update({ _id }, { name, address, phone })
  }
//新增图片
module.exports.PetPictures = async function (parm) {
  return await petModel.create(parm);
}


module.exports.getPetByPage = async ({ currentpage, eachpage }) => {
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