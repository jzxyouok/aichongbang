<template>
  <div class="about">
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="宠物性格">
          <el-radio-group v-model="form.type">
            <el-radio label="猫"></el-radio>
            <el-radio label="狗"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="宠物性格">
          <el-radio-group v-model="form.resource">
            <el-radio label="温驯"></el-radio>
            <el-radio label="狂野"></el-radio>
            <el-radio label="攻击性"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="宠物品种">
          <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 330px;">
            <el-option label="泰迪" value="泰迪"></el-option>
            <el-option label="比熊" value="比熊"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="宠物名">
          <el-input v-model="form.name" style="width: 330px;"></el-input>
        </el-form-item>
        <el-form-item label="宠物颜色">
          <el-input v-model="form.color" style="width: 330px;"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 330px;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <h1>宠物照片：</h1>
      <el-upload
        class="avatar-uploader"
        action="/pet/addImage"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :on-change="onchange"
        :before-upload="beforeAvatarUpload"
        style="border: 1px dashed #8c939d;margin-top: 20px;">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" >
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
import {fetchPost} from '../../server/fetch.js'
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: '',
        resource: "",
        desc: "",
      },
       imageUrl: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      let data={
        petName:this.form.name,//宠物名
        petColor:this.form.color,//宠物颜色
        petType:this.form.type,//宠物品类
        petKind:this.form.region,//宠物种类
        petDate:this.form.date1,//宠物生日
        petCharacter:this.form.resource,//宠物性格
      }
      fetchPost('/pet/addpet',data)
    },
    handleAvatarSuccess(res, file) {
      // console.log(res.body);
      this.imageUrl = URL.createObjectURL(file.raw);
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
.about {
  display: flex;
  justify-content: space-around;
}
.avatar-uploader .el-upload {
  border: 1px solid #8c939d;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  
}
.avatar {
  width: 178px;
  height: 170px;
  display: block;
}
</style>
