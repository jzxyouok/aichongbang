<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商品管理" name="first">商品管理</el-tab-pane>
    <el-tab-pane label="宠物管理" name="second">宠物管理</el-tab-pane>
    <el-tab-pane label="服务管理" name="third">服务管理</el-tab-pane>
    <el-tab-pane label="我的店员" name="fourth">我的店员</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
