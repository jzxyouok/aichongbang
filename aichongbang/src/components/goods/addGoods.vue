<template>
  <div class="about">
    <el-card>
      <div>
        商品名称：
        <el-input class="box-card" clearable v-model="goodsName" placeholder="请输入商品品牌名、推广标题"></el-input>
      </div>
      <div class="top">
        商品品类：
        <el-input class="box-card" clearable v-model="goodsType" placeholder="狗粮、猫粮、猫砂、玩具等"></el-input>
      </div>
      <div class="top">
        商品材质：
        <el-input
          class="box-card"
          clearable
          v-model="goodsMaterial"
          placeholder="材质（玩具等用品）、制作方法（粮食的烘培、膨化等）"
        ></el-input>
      </div>
      <div class="top">
        适用规格：
        <el-input class="box-card" clearable v-model="goodsCanFor" placeholder="适用幼犬、成犬、幼猫等"></el-input>
      </div>
      <div class="top">
        专属规格：
        <el-input class="box-card" clearable v-model="goodsOnlyFor" placeholder="贵宾专用、比熊专用等"></el-input>
      </div>
      <div class="top">
        包装规格：
        <el-input class="box-card" clearable v-model="goodsSize" placeholder=" 1kg，5kg 等"></el-input>
      </div>
      <div class="top">
        特殊功用：
        <el-input class="box-card" clearable v-model="goodsSpecial" placeholder=" 美毛、去泪痕"></el-input>
      </div>
      <div class="top">
        商品产地：
        <el-input class="box-card" clearable v-model="goodsRegion" placeholder=" 国产 广州、加拿大、美国等"></el-input>
      </div>
      <div class="top">
        出厂日期：
        <el-input class="box-card" clearable v-model="goodsDate" placeholder=" 生产日期"></el-input>
      </div>
    </el-card>
    <el-card>
      <div class="top">
        保质时间：
        <el-input
          class="box-card"
          clearable
          v-model="goodsTime"
          placeholder=" 12月（保质期设定会应景起效，如会员价）"
        ></el-input>
      </div>
      <div class="top">
        供应来源：
        <el-input class="box-card" clearable v-model="goodsSupplier" placeholder=" 商品供应来源"></el-input>
      </div>
      <div class="top">
        特色说明：
        <el-input class="box-card" clearable v-model="goodsIntro" placeholder="商品的特色"></el-input>
      </div>
      <div class="top">
        商品价格：
        <el-input class="box-card" clearable v-model="goodsPrice" placeholder=" 基准价格"></el-input>
      </div>
      <div class="top">
       <el-upload ref="upload" class="upload-demo" action="/goods/uploadGoodsImg" :on-success='handleAvatarSuccess'
            :auto-upload='false'>
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
      </div>
      <div class="top btn">
        商品口味：
        <div class="top"></div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-radio-group v-model="form.goodsTaste">
            <el-radio label="鸡肉味"></el-radio>
            <el-radio label="牛肉味"></el-radio>
          </el-radio-group>
        </el-form>
      </div>
      <div class="top btn">
        <el-button type="primary" round @click="Onsubmit">提交信息</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { fetchPost } from "../../server/fetch.js";
export default {
  data() {
    return {
      goodsName: "",
      goodsType: "",
      goodsMaterial: "",
      goodsCanFor: "",
      goodsOnlyFor: "",
      goodsSize: "",
      goodsSpecial: "",
      goodsRegion: "",
      goodsDate: "",
      goodsTime: "",
      goodsSupplier: "",
      goodsIntro: "",
      goodsPrice: "",
      form: {
        goodsTaste: "",
        shopImg: ''
      },
      goodsImg: ""
    };
  },
  methods: {
   handleAvatarSuccess(res, file) {
        const { url } = res.data
        this.form.shopImg = url
      },
    Onsubmit(formName) {
      this.$refs.upload.submit();
      var data = {};
      setTimeout(() => {
        data = {
          goodsName: this.goodsName,
          goodsType: this.goodsType,
          goodsMaterial: this.goodsMaterial,
          goodsCanFor: this.goodsCanFor,
          goodsOnlyFor: this.goodsOnlyFor,
          goodsSize: this.goodsSize,
          goodsSpecial: this.goodsSpecial,
          goodsRegion: this.goodsRegion,
          goodsDate: this.goodsDate,
          goodsTime: this.goodsTime,
          goodsSupplier: this.goodsSupplier,
          goodsIntro: this.goodsIntro,
          goodsPrice: this.goodsPrice-0,
          goodsTaste: this.form.goodsTaste,
          shopImg: this.form.shopImg,
          userID: document.cookie.slice(7)
        };
        fetchPost("/goods/uploadGoods", data)
      }, 600);
    }
  }
};
</script>

<style scoped>
.box-card {
  width: 400px;
}
.top {
  margin-top: 20px;
}
.about {
  display: flex;
  justify-content: center;
}
.avatar {
  width: 500px;
  height: 300px;
}
.btn {
  display: flex;
  justify-content: center;
}
</style>
