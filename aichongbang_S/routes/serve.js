var express = require('express');
var router = express.Router();
//表现层，只负责传递东西到逻辑层，和接收逻辑层的结果。
let { addService, getServiceData } = require('./../service/serveService.js')

//增加服务类型
router.post('/addService', async function (req, res, next) {
	res.send(await addService(req.body))
})

//获取服务数据
router.post('/getServiceData', async function (req, res, next) {
 res.send(await getServiceData(req.body))
})

module.exports = router;
