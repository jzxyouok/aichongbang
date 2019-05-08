const { uploadGoods } = require('../dao/goodsDao.js');

module.exports.uploadGoods = async function (id) {
    return await uploadGoods(id)
 }