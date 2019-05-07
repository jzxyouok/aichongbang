const {uploadShop}=require('../dao/shopDao')
module.exports.uploadShop = async (shop) => {
    return await uploadShop(shop);
}