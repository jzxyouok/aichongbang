<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>增加服务</span>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名称" >
        <el-input v-model="ruleForm.name" prop="name"></el-input>
      </el-form-item>
      <el-form-item label="品类" prop="class">
        <el-input v-model="ruleForm.class"></el-input>
      </el-form-item>
     <el-form-item label="适用规格">
        <el-radio v-model="radio" label="小型"></el-radio>
        <el-radio v-model="radio" label="中型"></el-radio>
        <el-radio v-model="radio" label="大型"></el-radio>
      </el-form-item>
      <el-form-item label="服务规格" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
      </el-form-item>
      <el-form-item label="耗时" prop="time">
        <el-input v-model="ruleForm.time"></el-input>
      </el-form-item>
      <el-form-item label="服务员等级">
        <el-radio v-model="radio1" label="普通"></el-radio>
        <el-radio v-model="radio1" label="高级"></el-radio>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="排期">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">----</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">增加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { fetchPost } from "../../server/fetch";
export default {
  data() {
    return {
      radio: "",
      radio1: "",
      ruleForm: {
        name: "",
        class: "",
        weight: "",
        type: "",
        time: "",
        price: "",
        date1: "",
        date2: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { message: "仅支持中文", trigger: "blur" }
        ],
        class: [{ required: true, message: "请选择服务类型", trigger: "blur" }],
        weight: [
          { required: true, message: "请选择适用规格", trigger: "blur" }
        ],
        type: [{ required: true, message: "请选择服务规格", trigger: "blur" }],
        time: [{ required: true, message: "请输入时间", trigger: "blur" }],
        price: [{ required: true, trigger: "blur" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const data = {
            name: this._data.ruleForm.name,
            class: this._data.ruleForm.class,
            weight: this._data.ruleForm.weight,
            type: this._data.ruleForm.type,
            time:this._data.ruleForm.time,
            radio:this._data.radio,
            radio1:this._data.radio1,
            price: this._data.ruleForm.price,
            date1: this._data.ruleForm.date1,
            date2: this._data.ruleForm.date2
          };
          console.log(data)
          fetchPost("/service/addService",data);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
