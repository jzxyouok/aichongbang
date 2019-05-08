var express = require('express');
var router = express.Router();
const { uploadFile } = require("../public/javascripts/upload");
let {uploadGood,goodsList}=require('../service/goodsService.js')
/* 商品 */
router.post('/uploadGoods', async function (req, res, next) {
    // console.log(uploadFile)
    return res.send(await uploadGood(req.body))
});
router.post('/uploadGoodsImg', async function (req, res, next) {
    // console.log(await req.body)
    let result = await uploadFile(req, res, {
        fileType: 'goods',   // 图片保存文件名
        path: './public/images' // 图片保存文件路径
    });
    res.send(result)
});

router.post('/getGoods', async function (req, res, next) {
    return res.send(await goodsList(req.body))
});
module.exports = router;
