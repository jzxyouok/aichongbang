const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userAcount: String, //登录名
    userPwd: String, //密码
    userPhone: String,  //手机号
    userMail: String,  //邮箱
    userName: String,   //姓名
    userType: {     // 角色，默认为1门店管理员
        type: Number,
        default: 1
    },
    userStatus: {   //门店管理员状态 默认为1可用，
        type: Number,
        default: 1   //申请0  可用1  不可用2
    },
   
})

mongoose.model('userModel', userSchema, "user");

module.exports.userModel = mongoose.model('userModel');