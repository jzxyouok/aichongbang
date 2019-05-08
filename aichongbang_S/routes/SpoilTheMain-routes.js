var express = require('express');
var router = express.Router();

/* GET users listing. */

let {
  addSpoilTheMain, removeSpoilTheMain, findSpoilTheMain, updateSpoilTheMain,getSpoilTheMainByPage,
} = require("../service/petservice.js")


//新增宠主
router.post('/addSpoilTheMain', async function (req, res, next) {
  console.log(1)
  res.send(await addSpoilTheMain(req.body));
});

//删除宠主
router.get('/removeSpoilTheMain', async function (req, res, next) {
  res.send(await removeSpoilTheMain(req.query));
});

//查询
router.get('/findSpoilTheMain', async function (req, res, next) {
  res.send(await findSpoilTheMain(req.query));
});
//修改
router.get('/updateSpoilTheMain', async function (req, res, next) {
  res.send(await updateSpoilTheMain(req.query));
})


//通过页面获取信息

router.get('/getSpoilTheMainByPage',async function (req,res,next) { 
  res.send(await getSpoilTheMainByPage(req.query));
})



router.get('/addImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
      fileType: 'pet',   // 图片保存文件名
      path: './public/images' // 图片保存文件路径
  });
  res.send(result);
});
module.exports = router;