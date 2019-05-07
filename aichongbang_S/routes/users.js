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
router.get('/getUser', async function (req, res, next) {
	res.send(await getUser())
})

//审核修改用户
router.get('/updateUser', async function (req, res, next) {
	res.send(await updateUser(req.query))
})


// //es7，登陆
// router.post('/login', async function (req, res, next) {
// 	let data = await login(req.body)
// 	if (data) {//登陆成功后保存用户至本地存储
// 		req.session.user = data;
// 	}
// 	res.send(data);
// })
// //后台登陆
// router.post('/blogin', async function (req, res, next) {
// 	res.send(await blogin(req.body))
// })
// //退出登陆
// router.get('/logout', async function (req, res, next) {
// 	req.session.user = null;
// 	res.send(true);
// })
// //注册
// router.post('/register', async function (req, res, next) {
// 	res.send(await register(req.body))
// })
// //获取后台用户
// router.post('/getUsers', async function (req, res, next) {
// 	// console.log(req.body);
// 	res.send(await getUsers(req.body))
// })
// //删除用户
// router.post('/deletes', async function (req, res, next) {
// 	res.send(await deletes(req.body))
// })

// //新增前台用户
// router.post('/addFrontUser', async function (req, res, next) {
// 	res.send(await addFrontUser(req.body))
// })

// //修改密码
// router.post('/updates', async function (req, res, next) {
// 	res.send(await updates(req.body))
// })
// //是否登陆
// router.get('/isLogin', async function (req, res, next) {
// 	if (req.session.user) {
// 		res.send(true);
// 	} else {
// 		res.send(false);
// 	}
// })
// //通过id找到当前登陆的用户
// router.post('/getUserById', async function (req, res, next) {
// 	// console.log(req.body);
// 	res.send(await getUserById(req.body))
// })

// //判断手机号是否存在
// router.post('/phoneIsExist', async function (req, res, next) {
// 	res.send(await phoneIsExist(req.body))
// })
// //修改用户信息
// router.post('/userupdates', async function (req, res, next) {
// 	res.send(await userupdates(req.body))
// })
module.exports = router;
