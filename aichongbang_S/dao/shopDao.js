const { shopModel } = require('./models/shopModel');

//获取商店
module.exports.getShop = async function () {
    let result = await shopModel.find().populate('userID')
    console.log(result);
    
    return result.filter(item => item.shopStatus == 0)
}