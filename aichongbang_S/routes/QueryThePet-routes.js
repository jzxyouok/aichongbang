var express = require('express');
const {uploadFile} =require('../public/javascripts/upload')
var router = express.Router();

/* GET users listing. */

let {
  addpet, removepet, findpet, updatepet,getPetByPage,PetPictures
} = require("../service/QueryThePet-service")


//新增宠物
router.post('/addpet', async function (req, res, next) {
  res.send(await addpet(req.body));
});

//删除宠物
router.get('/removepet', async function (req, res, next) {
  res.send(await removepet(req.query));
});

//查询
router.get('/findpet', async function (req, res, next) {
  res.send(await findpet(req.query));
});
//修改
router.get('/updatepet', async function (req, res, next) {
  res.send(await updatepet(req.query));
})
//新增图片
router.post('/PetPictures', async function (req, res, next) {

  res.send(await PetPictures(req.body));
});

//通过页面获取信息

router.get('/getPetByPage',async function (req,res,next) { 
  res.send(await getPetByPage(req.query));
})



router.post('/addImage', async function (req, res, next) {
  let result = await uploadFile(req, res, {
      fileType: 'pet',   // 图片保存文件名
      path: './public/images' // 图片保存文件路径
  });
  res.send(result);
});
module.exports = router;