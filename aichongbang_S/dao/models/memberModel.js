const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    memberPhone:String,      //宠主电话
    memberAcount:String,    //昵称
    memberName:String,       //真实姓名
    menberCard:String,      //会员卡
    memberImg:String,       //头像
    memberAdd:String,   //地址
    memberArea:String,    //区域
    memberPoint:String,    //积分
    memberPet:Array,     //拥有的宠物
})

mongoose.model('memberModel', memberSchema, "member");

module.exports.memberModel = mongoose.model('memberModel');