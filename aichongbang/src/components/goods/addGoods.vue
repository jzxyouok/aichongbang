<template>
  <div class="about">
    <el-card>
      <div>
        商品名称：
        <el-input class="box-card" clearable v-model="input" placeholder="请输入商品品牌名、推广标题"></el-input>
      </div>
      <div class="top">
        商品品类：
        <el-input class="box-card" clearable v-model="name" placeholder="狗粮、猫粮、猫砂、玩具等"></el-input>
      </div>
      <div class="top">
        商品材质：
        <el-input
          class="box-card"
          clearable
          v-model="caizhi"
          placeholder="材质（玩具等用品）、制作方法（粮食的烘培、膨化等）"
        ></el-input>
      </div>
      <div class="top">
        适用规格：
        <el-input class="box-card" clearable v-model="gg" placeholder="适用幼犬、成犬、幼猫等"></el-input>
      </div>
      <div class="top">
        专属规格：
        <el-input class="box-card" clearable v-model="zs" placeholder="贵宾专用、比熊专用等"></el-input>
      </div>
      <div class="top">
        包装规格：
        <el-input class="box-card" clearable v-model="bz" placeholder=" 1kg，5kg 等"></el-input>
      </div>
      <div class="top">
        特殊功用：
        <el-input class="box-card" clearable v-model="ts" placeholder=" 美毛、去泪痕"></el-input>
      </div>
      <div class="top">
        商品产地：
        <el-input class="box-card" clearable v-model="cd" placeholder=" 国产 广州、加拿大、美国等"></el-input>
      </div>
      <div class="top">
        出厂日期：
        <el-input class="box-card" clearable v-model="rq" placeholder=" 生产日期"></el-input>
      </div>
    </el-card>
    <el-card>
      <div class="top">
        保质时间：
        <el-input class="box-card" clearable v-model="sj" placeholder=" 12月（保质期设定会应景起效，如会员价）"></el-input>
      </div>
      <div class="top">
        供应来源：
        <el-input class="box-card" clearable v-model="ly" placeholder=" 商品供应来源"></el-input>
      </div>
      <div class="top">
        特色说明：
        <el-input class="box-card" clearable v-model="sm" placeholder="商品的特色"></el-input>
      </div>
      <div class="top">
        商品价格：
        <el-input class="box-card" clearable v-model="price" placeholder=" 基准价格"></el-input>
      </div>
      <div class="top">
        商品图片：
        <el-upload
          class="avatar-uploader"
          action="/goods/uploadGoods"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-change="onchange"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
        </el-upload>
      </div>
      <div class="top btn">
        商品口味：
        <div class="top"></div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-radio-group v-model="form.desc">
            <el-radio label="鸡肉味"></el-radio>
            <el-radio label="牛肉味"></el-radio>
          </el-radio-group>
        </el-form>
      </div>
      <div class="top btn">
        <el-button type="primary" round>提交信息</el-button>
      </div>
    </el-card>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      input: "",
      name: "",
      caizhi: "",
      gg: "",
      zs: "",
      bz: "",
      ts: "",
      cd: "",
      rq: "",
      sj: "",
      ly: "",
      sm: "",
      price: "",
      form: {
        desc: ""
      },
      imageUrl: "",
     
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res.body);
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //当上传图片后，调用onchange方法，获取图片本地路径
    onchange(file, fileList) {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imageUrl = e.target.result; //将图片路径赋值给src
      };
      reader.readAsDataURL(file);
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
