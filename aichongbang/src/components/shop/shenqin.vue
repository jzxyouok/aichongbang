<template>
  <div>
    <el-card class="box-card name" style="width:500px">
      <el-form  ref="form" :model="form"  :rules="rules" label-width="110px">
        <el-form-item label="名称"  prop="shopName" >
          <el-input v-model="form.shopName"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码" prop="shopLicenceNum">
          <el-input v-model="form.shopLicenceNum"></el-input>
        </el-form-item>
        <el-form-item label="营业执照图片">
          <el-input v-model="form.shopLicenceImg"></el-input>
        </el-form-item>
        <el-form-item label="营业地点" prop="shopAdd">
          <!-- <el-button type="primary" @click="dialogVisible = true">点击选择</el-button> -->
          <el-input v-model="form.shopAdd"></el-input>
        </el-form-item>
        <el-form-item label="定位">
          <el-input v-model="form.shopLocation"></el-input>
        </el-form-item>
        <el-form-item label="法人" prop="shopCorporate">
          <el-input v-model="form.shopCorporate"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="shopTel">
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
        <el-form-item  label="店员属性">
          <el-card class="waiter" style="margin-bottom: 10px">
            <el-form-item label="店员姓名">
              <el-input v-model="empName"></el-input>
            </el-form-item>
            <el-form-item label="店员等级" style="margin-top: 10px;margin-bottom: 10px">
                <el-select v-model="value1" clearable @change='getSelectVal' placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select> 
            </el-form-item>
            <el-form-item label="店员电话">
              <el-input v-model="empPhone"></el-input>
            </el-form-item>
          </el-card>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)">立即申请</el-button>
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

        rules: {
        shopName: [
          { required: true, message: "请输入名称", trigger: "blur" },
        ],
        shopLicenceNum: [{ required: true, message: "请输入营业执照号码", trigger: "blur" }],
        shopAdd: [
          { required: true, message: "请输入营业地点", trigger: "blur" }
        ],
        shopCorporate: [{ required: true, message: "请输入法人代表", trigger: "blur" }],
        shopTel: [{ required: true, message: "请输入电话", trigger: "blur" }],
      },


        options: [{
          value: '选项1',
          label: '特级'
        }, {
          value: '选项2',
          label: '优秀'
        }, {
          value: '选项3',
          label: '普通'
        }],
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
        value1:null,
        empName:'',
        empLevel:'',
        empPhone:''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        const { url } = res.data
        this.form.shopImg = url
      },
      getSelectVal(value){
       this.empLevel = this.options.find(item=>item.value===value).label
      },
      onSubmit(formName) {
        // console.log(this.$refs[formName])
        this.$refs['form'].validate(valid => {
          if (valid) {
          this.form.shopEmployee.push({empName:this.empName},{empLevel:this.empLevel},{empPhone:this.empPhone})
          console.log(this.form.shopEmployee)
        this.$refs.upload.submit()
        var data = {}
        setTimeout(() => {
          data = {
            useMoney: this.form.useMoney,
            shopName: this.form.shopName,
            shopLicenceNum: this.form.shopLicenceNum,
            shopLicenceImg: this.form.shopLicenceImg,   //营业招片
            shopAdd: this.form.shopAdd,      //地址
            shopLocation: this.form.shopLocation,    //定位
            shopCorporate: this.form.shopCorporate,   //法人
            shopTel: this.form.shopTel,    //座机
            shopFeature: this.form.shopFeature,
            shopImg: this.form.shopImg,
            shopEmployee:this.form.shopEmployee,
            userID:document.cookie.slice(7)
          }
          fetchPost('/shop/uploadShop', data)
        }, 600);
      }else{
        this.$alert('内容缺省', '提示', {
          confirmButtonText: '确定',
          
        });
          return false;
      }

      });
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
