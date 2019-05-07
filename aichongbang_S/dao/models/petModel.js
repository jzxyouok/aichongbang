const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    petName: String,     //宠物名
    petType: String,    //宠物品类（猫，狗）
    petKind: String,    //宠物种类  (土狗，柴犬)
    petColor: String,    //颜色
    petDate: String,    //生日
    petCharacter:String,   //宠物性格
    userID: { //用户id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
})

mongoose.model('petModel', petSchema, "pet");

module.exports.petModel = mongoose.model('petModel');