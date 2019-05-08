<template>
  <div class="login">
    <h1>登录页面</h1>
    <div class="d1">
      <el-input v-model="userAcount" placeholder="请输入用户名"></el-input>
    </div>
    <div class="d2">
      <el-input placeholder="请输入密码" v-model="userPwd" show-password></el-input>
    </div>
    <div class="d3">
      <el-button type="primary" plain @click="Login">登陆</el-button>
      <el-button type="primary" plain @click="Reg">注册</el-button>
    </div>
  </div>
</template>

<script>
import { fetchPost } from "../server/fetch";
export default {
  name: "Login",
  data() {
    return {
      userAcount: "",
      userPwd: ""
    };
  },
  mounted() {
    this.userAcount = this.$route.params.username;
  },
  methods: {
    Login() {
      this.$router.push("/info");
    },
    Reg() {
      this.$router.push("/reg");
    }
  },
  beforeRouteLeave(to, from, next) {
    let obj = { userAcount: this.userAcount, userPwd: this.userPwd };
    if ((to.name == "Info")) {
      fetchPost("/user/login", obj).then(res => {
        if (res.length > 0) {
          if (res[0].userType == 0) {
            document.cookie = `userID=${res[0]._id}`;
            next("/infoP");
          } else {
            if (res[0].userStatus == 1) {
              document.cookie = `userID=${res[0]._id}`;
              next();
            } else {
              this.$message.error("错了哦，这是一条错误消息");
              next("/reg");
            }
          }
        } else {
          this.$message.error("请进行正规操作");
        }
      });
    } else {
      next();
    }
  }
};
</script>

<style scoped>
.login {
  width: 400px;
  margin: 50px auto;
  border: #409eff 1px solid;
  padding: 20px;
  border-radius: 1ch;
}
h1 {
  margin: 0 0 10px 0;
  text-align: center;
  color: #409eff;
}
.d2,
.d1 {
  margin-bottom: 20px;
}
</style>

