const { getShop} = require('../dao/shopDao.js');

//注册
module.exports.getShop = async function () {
   return await getShop()
}
