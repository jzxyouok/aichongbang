const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: String,    //服务名
    serviceType: String,    //服务类型
<<<<<<< HEAD
    serviceSchedule: Date,  //预约服务
=======
    serviceSchedule1: Date,  //预约服务(排期--年月日)
    serviceSchedule2: Date,  //预约服务(排期时间--时分秒)
>>>>>>> 61fad2fd2f61ca9fbdf9088ac1d4fa886d6fea7f
    serviceCanFor: String,     //适用规格
    serviceDetial: String,   //服务规格
    serviceTime: String,    //耗时
    serviceLevel: String,    //等级
    servicePrice: Number,     //价格
    userID: { //用户id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
})

mongoose.model('serviceModel', serviceSchema, "service");

module.exports.serviceModel = mongoose.model('serviceModel');