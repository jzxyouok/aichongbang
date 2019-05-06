const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: String,    //服务名
    serviceType: String,    //服务类型
    serviceSchedule: String,  //预约服务
    serviceCanFor: String,     //适用规格
    serviceDetial: String,   //服务规格
    serviceTime: String,    //耗时
    serviceLevel: Number,    //等级
    servicePrice: Number,     //价格
})

mongoose.model('serviceModel', serviceSchema, "service");

module.exports.serviceModel = mongoose.model('serviceModel');