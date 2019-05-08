var express = require('express');
var router = express.Router();
//表现层，只负责传递东西到逻辑层，和接收逻辑层的结果。
let { reg, getUser, updateUser,login } = require('../service/usersService.js')

//登录
router.post('/login', async function (req, res, next) {
	res.send(await login(req.body))
})

//注册
router.post('/reg', async function (req, res, next) {
	res.send(await reg(req.body))
})

//获取用户
router.post('/getUser', async function (req, res, next) {
	res.send(await getUser(req.body))
})

//审核修改用户
router.post('/updateUser', async function (req, res, next) {
	res.send(await updateUser(req.body))
})

module.exports = router;
