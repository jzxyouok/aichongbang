<<<<<<< HEAD
<template>
  <div>
    <el-card class="box-card name" style="width:500px">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="form.shopName"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码">
          <el-input v-model="form.shopLicenceNum"></el-input>
        </el-form-item>
        <el-form-item label="营业执照图片">
          <el-input v-model="form.shopLicenceImg"></el-input>
        </el-form-item>
        <el-form-item label="营业地点">
          <!-- <el-button type="primary" @click="dialogVisible = true">点击选择</el-button> -->
          <el-input v-model="form.shopAdd"></el-input>
        </el-form-item>
        <el-form-item label="定位">
          <el-input v-model="form.shopLocation"></el-input>
        </el-form-item>
        <el-form-item label="法人">
          <el-input v-model="form.shopCorporate"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.shopTel"></el-input>
        </el-form-item>
        <el-form-item style="display: flex;align-items: center" label="头像">
          <el-upload ref="upload" class="upload-demo" action="/shop/uploadShopImg" :on-success='handleAvatarSuccess'
            :auto-upload='false'>
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="特色">
          <el-input v-model="form.shopFeature"></el-input>
        </el-form-item>
        <el-form-item label="佣金比例">
          <el-select v-model="form.useMoney" placeholder="请选择">
            <el-option label="5%" value="5%"></el-option>
            <el-option label="10%" value="10%"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="display: flex;align-items: center" label="店员属性">
          <el-card class="">
            <el-form-item label="店员姓名">
              <el-input v-model="form.shopName"></el-input>
            </el-form-item>
            <el-form-item label="店员等级">
              <el-input v-model="form.shopName"></el-input>
            </el-form-item>
            <el-form-item label="店员电话">
              <el-input v-model="form.shopName"></el-input>
            </el-form-item>
          </el-card>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%"></el-dialog>
    <div id="container" style="height:400px"></div>
  </div>
</template>
<script>
  import { fetchPost } from '../../server/fetch'
  export default {
    data() {
      return {
        form: {
          useMoney: "",
          shopName: '',
          shopLicenceNum: '',
          shopLicenceImg: '',   //营业招片
          shopAdd: '',      //地址
          shopLocation: '',    //定位
          shopCorporate: '',   //法人
          shopTel: 0,    //座机
          shopFeature: '',   //特色
          shopEmployee: [],    //店员属性
          shopImg: ''
        },
        dialogVisible: false,
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        const { url } = res.data
        this.form.shopImg = url
      },
      onSubmit() {
        this.$refs.upload.submit()
        var data = {}
        setTimeout(() => {
          console.log(this.form.shopImg)
          data = {
            useMoney: this.form.useMoney,
            shopName: this.form.shopName,
            shopLicenceNum: this.form.shopLicenceNum,
            shopLicenceImg: this.form.shopLicenceImg,   //营业招片
            shopAdd: this.form.shopAdd,      //地址
            shopLocation: this.form.shopLocation,    //定位
            shopCorporate: this.form.shopCorporate,   //法人
            shopTel: 0,    //座机
            shopFeature: this.form.shopFeature,
            shopImg: this.form.shopImg
          }
          fetchPost('/shop/uploadShop', data)
        }, 600);
      },
    },
  };
</script>

<style scoped>
  .el-form-item__content {
    margin-left: 0px !important
  }

  .avatar-uploader el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
=======
<template>
  <div>
    <el-card class="box-card name" style="width:500px">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="form.shopName"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码">
          <el-input v-model="form.shopLicenceNum"></el-input>
        </el-form-item>
        <el-form-item label="营业执照图片">
          <el-input v-model="form.shopLicenceImg"></el-input>
        </el-form-item>
        <el-form-item label="营业地点">
          <!-- <el-button type="primary" @click="dialogVisible = true">点击选择</el-button> -->
          <el-input v-model="form.shopAdd"></el-input>
        </el-form-item>
        <el-form-item label="定位">
          <el-input v-model="form.shopLocation"></el-input>
        </el-form-item>
        <el-form-item label="法人">
          <el-input v-model="form.shopCorporate"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.shopTel"></el-input>
        </el-form-item>
        <el-form-item style="display: flex;align-items: center" label="头像">
            <el-upload
            ref="upload"
            class="upload-demo"
            action="/shop/uploadShopImg"
            :on-success='handleAvatarSuccess'
            
            :auto-upload='false'
           >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="特色">
          <el-input v-model="form.shopFeature"></el-input>
        </el-form-item>
        <el-form-item label="佣金比例">
          <el-select v-model="form.useMoney" placeholder="请选择">
            <el-option label="5%" value="5%"></el-option>
            <el-option label="10%" value="10%"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="店员属性">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%"></el-dialog>
    <div id="container" style="height:400px"></div>
  </div>
</template>
<script>
  import { fetchPost } from '../../server/fetch'
  export default {
    data() {
      return {
        form: {
          useMoney: "",
          shopName: '',
          shopLicenceNum: '',
          shopLicenceImg: '',   //营业招片
          shopAdd: '',      //地址
          shopLocation: '',    //定位
          shopCorporate: '',   //法人
          shopTel: 0,    //座机
          shopFeature: '',   //特色
          shopEmployee: [],    //店员属性
          shopImg:''
        },
        dialogVisible: false,
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        const {url}=res.data
        this.form.shopImg=url
      },
      onSubmit() {
        this.$refs.upload.submit()
        var data={}
        setTimeout(() => {
          console.log(this.form.shopImg)
         data={
          useMoney: this.form.useMoney,
          shopName: this.form.shopName,
          shopLicenceNum: this.form.shopLicenceNum,
          shopLicenceImg: this.form.shopLicenceImg,   //营业招片
          shopAdd: this.form.shopAdd,      //地址
          shopLocation: this.form.shopLocation,    //定位
          shopCorporate: this.form.shopCorporate,   //法人
          shopTel: 0,    //座机
          shopFeature: this.form.shopFeature,
          shopImg:this.form.shopImg
        }
        fetchPost('/shop/uploadShop', data)
        }, 600);
      }, 
    },
  };
</script>

<style scoped>
  .avatar-uploader el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
>>>>>>> e55aa93d0f3b3e562e6ded65377d16b8b7a1a88b
