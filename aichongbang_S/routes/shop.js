var express = require('express');
var router = express.Router();
const { uploadFile } = require("../public/javascripts/upload");
const {uploadShop}=require('../service/shopService')
/* GET home page. */
router.post('/uploadShopImg', async function(req, res, next) {
    // console.log(await req.body)
    let result = await uploadFile(req, res, {
        fileType: 'shop',   // 图片保存文件名
        path: './public/images' // 图片保存文件路径
    });
    res.send(result)
});
router.post('/uploadShop', async function(req, res, next) {
    console.log(await req.body)
    return res.send(await uploadShop(req.body))
    
});

module.exports = router;