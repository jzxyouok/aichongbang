let { shopModel } = require('./models/shopModel.js');
module.exports.uploadShop = async (shop) => {
    return await shopModel.create(shop);
}