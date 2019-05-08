var express = require('express');
var router = express.Router();
let { getShop, uploadShop, auditShop } = require('../service/shopService.js')
const { uploadFile } = require("../public/javascripts/upload");


//获取门店
router.post('/getShop', async function (req, res, next) {
    res.send(await getShop(req.body))
})

 
//审核修改门店
router.post('/auditShop', async function (req, res, next) {
    res.send(await auditShop(req.body))
})

/* GET home page. */
router.post('/uploadShopImg', async function (req, res, next) {
    // console.log(await req.body)
    let result = await uploadFile(req, res, {
        fileType: 'shop',   // 图片保存文件名
        path: './public/images' // 图片保存文件路径
    });
    res.send(result)
});
router.post('/uploadShop', async function (req, res, next) {
    return res.send(await uploadShop(req.body))
});

module.exports = router;
