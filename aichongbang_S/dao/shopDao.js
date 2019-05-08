const { shopModel } = require('./models/shopModel');

//获取商店
module.exports.getShop = async function ({ currentPage, eachPage }) {

    let count = await shopModel.find({ shopStatus: 0 }).countDocuments();  // 总条数
    let totalPage = Math.ceil(count / eachPage); // 总页数
    let shops = await shopModel
        .find({ shopStatus: 0 })
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0).populate('userID')
    let pageData = {
        currentPage: currentPage - 0,  // 当前页码
        eachPage: eachPage - 0,  // 每页显示条数
        totalPage: totalPage - 0,   // 总页数
        count: count - 0, // 总条数
        shops  // 电影数据
    };

    return pageData;
}

//审核门店
module.exports.auditShop = async function (id) {
    return await shopModel.updateOne(id, { shopStatus: 1 });
}
//上传
module.exports.uploadShop = async (shop) => {
    return await shopModel.create(shop);
}