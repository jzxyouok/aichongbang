<template>
  <el-table :data="tableData" height="250" border style="width: 100%">
    <el-table-column prop="date" label="商品名称" width="180"></el-table-column>
    <el-table-column prop="name" label="商品品类" width="180"></el-table-column>
    <el-table-column prop="address" label="商品材质"></el-table-column>
  </el-table>
</template>

<script>
export default {
  
  data() {
    return {
      
      tableData: [
        {

          date:'',
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };

  }
};
</script>

<style>
</style>
