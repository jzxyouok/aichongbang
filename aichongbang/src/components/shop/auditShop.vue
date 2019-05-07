<template>
  <el-table :data="tableData" height="550" border style="width: 100%">
    <el-table-column prop="shopName" label="名称"></el-table-column>

    <el-table-column prop="shopAdd" label="地址"></el-table-column>

    <el-table-column prop="shopCorporate" label="法人"></el-table-column>

    <el-table-column prop="shopFeature" label="特色"></el-table-column>

    <el-table-column prop="userID" label="店主"></el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">审核通过</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchPost } from "../../server/fetch";
export default {
  data() {
    return {
      
      tableData: []
    };
  },
  mounted() {
    let _this = this;
    fetch("/shop/getShop")
      .then(res => res.json())
      .then(res => {
        _this.tableData = res;
      });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      fetch(`/user/updateUser?_id=${row._id}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.ok == 1) {
            alert("修改成功");
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
