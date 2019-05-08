const { getShop, uploadShop, auditShop,getShopByUserId,getShopByPage } = require('../dao/shopDao.js');

//获取
module.exports.getShop = async function (data) {
    return await getShop(data)
}
module.exports.getShopByUserId = async function (data) {
    return await getShopByUserId(data)
}


module.exports.uploadShop = async (shop) => {
    return await uploadShop(shop);
}

//审核修改门店状态
module.exports.auditShop = async function (id) {
    return await auditShop(id)
}