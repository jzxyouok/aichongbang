const mongoose = require('mongoose');

// 门店管理员的小金库
const storeSchema = new mongoose.Schema({
    userID: { //用户id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    goodsID: {  // 商品id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    },
    petID: { // 宠物id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petModel'
    },
    serviceID: { // 服务id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceModel'
    },
  
})

mongoose.model('storeModel', storeSchema, "store");

module.exports.storeModel = mongoose.model('storeModel');