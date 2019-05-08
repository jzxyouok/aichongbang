const {goodsModel} =require("./models/goodsModel.js");

module.exports.uploadGoods = async function (id) {
    let result = await goodsModel.find(id);
    return result;
 }