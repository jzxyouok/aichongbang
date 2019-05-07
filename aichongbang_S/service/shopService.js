const { getShop,uploadShop} = require('../dao/shopDao.js');

//注册
module.exports.getShop = async function () {
   return await getShop()
}

module.exports.uploadShop = async (shop) => {
    return await uploadShop(shop);
}
