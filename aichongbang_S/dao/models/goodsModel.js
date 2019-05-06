const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    goodsName: String,       //商品名
    goodsType: String,       //商品品类
    goodsMaterial: String,   //商品材质或者制作方法
    goodsCanFor: String,     //适用规格
    goodsOnlyFor: String,    //专属规格
    goodsSize: String,        //包装规格
    goodsTaste: String,      //口味
    goodsSpecial: String,     //特殊功用
    goodsRegion: String,      //产地
    goodsDate: String,        //出厂日期
    goodsTime: String,        //保质期
    goodsSupplier: String,      //供应商
    goodsIntro:String,        //特色说明
    goodsPrice:Number,        //价格
    goodsImg:Array,          //图片
    
})

mongoose.model('goodsModel', goodsSchema, "goods");

module.exports.goodsModel = mongoose.model('goodsModel');