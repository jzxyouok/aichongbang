const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopName: String,     //名称，
    shopLicenceNum: String,   //营业执照
    shopLicenceImg: String,   //营业招片
    shopAdd: String,      //地址
    shopLocation: String,    //定位
    shopCorporate: String,   //法人
    shopTel: Number,    //座机
    shopImg: String,   //头像
    shopFeature: String,   //特色
    shopEmployee: Array,    //店员属性
    userID: {    //关联的用户id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    shopStatus: {
        type: Number,
        default: 0
    }
})

mongoose.model('shopModel', shopSchema, "shop");

module.exports.shopModel = mongoose.model('shopModel');