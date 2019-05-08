const { getShop, uploadShop, auditShop } = require('../dao/shopDao.js');

//获取
module.exports.getShop = async function (data) {
    return await getShop(data)
}

module.exports.uploadShop = async (shop) => {
    return await uploadShop(shop);
}

//审核修改门店状态
module.exports.auditShop = async function (id) {
    return await auditShop(id)
}