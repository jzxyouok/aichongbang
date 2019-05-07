var express = require('express');
var router = express.Router();
let { getShop} = require('../service/shopService.js')



//获取门店
router.get('/getShop', async function (req, res, next) {
	res.send(await getShop())
})



module.exports = router;
