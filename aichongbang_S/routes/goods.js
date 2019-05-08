var express = require('express');
var router = express.Router();
var { uploadFile } = require('../public/javascripts/upload')
/* 商品 */
router.post('/uploadGoods', async function (req, res, next) {
    let result = await uploadFile(req,res,{
        filetype:"goods",
        path:'./public/images'
    });
    res.send(result)
})
module.exports = router;
