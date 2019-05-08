<template>
  <div>
    <el-table :data="users" border style="width: 100%">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="userStatus" :formatter="formatter" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="setEachPage"
      @current-change="setCurrentPage"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></el-pagination>
  </div>
</template>

<script>
import { fetchData } from "../../server/fetch";
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} = createNamespacedHelpers("platform");
export default {
  watch: {
    //使用侦听器watch监听eachPage,currentPage这两个属性的变化
    eachPage() {
      this.currentPage = 1;
      this.getAllUserByPageAsync();
    },
    currentPage() {
      this.getAllUserByPageAsync();
    }
  },
  mounted() {
    this.getAllUserByPageAsync();
  },
  computed: {
    //因为计算属性，默认只有get方法，所以我们给eachPage,currentPage属性单独设置set用以实现数据双向绑定
    ...mapState(["users", "totalPage", "count"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurrentPage"]).setCurrentPage
    }
  },
  methods: {
    ...mapActions(["getAllUserByPageAsync", "auditPass"]),
    ...mapMutations(["setCurrentPage", "setEachPage"]),
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      if (this.auditPass({ _id: row._id })) {
        alert("修改成功");
      }
    },
    formatter(row) {
      if (row.userStatus == 0) {
        return "未审核";
      } else if (row.userStatus == 1) {
          return '可用'
      }else{
          return '不可用'
      }
    }
  }
};
</script>

<style scoped>
</style>
