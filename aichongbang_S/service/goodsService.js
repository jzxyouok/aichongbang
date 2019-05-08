const { uploadGood } = require('../dao/goodsDao.js');

module.exports.uploadGood = async function (data) {
    return await uploadGood(data)
 }
 
 module.exports.goodsList=async function(id){
     return await goodsList(id)
 }