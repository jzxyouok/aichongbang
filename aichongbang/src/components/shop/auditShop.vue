<template>
  <div>
    <el-table :data="shops" border style="width: 100%">
      <el-table-column prop="shopName" label="名称"></el-table-column>

      <el-table-column prop="shopAdd" label="地址"></el-table-column>

      <el-table-column prop="shopCorporate" label="法人"></el-table-column>

      <el-table-column prop="shopFeature" label="特色"></el-table-column>

      <el-table-column prop="userID" :formatter="geshi" label="店主"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">审核通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="setEachPage"
      @current-change="setCurrentPage"
      :current-page="currentPage"
      :page-sizes="[1, 10, 15, 20]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></el-pagination>
  </div>
</template>

<script>
import { fetchPost } from "../../server/fetch";
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} = createNamespacedHelpers("test");
export default {
  watch: {
    //使用侦听器watch监听eachPage,currentPage这两个属性的变化
    eachPage() {
      this.currentPage = 1;
      this.getShopByPageAsync();
    },
    currentPage() {
      this.getShopByPageAsync();
    }
  },
  mounted() {
    this.getShopByPageAsync(document.cookie.slice(7));
  },
  computed: {
    //因为计算属性，默认只有get方法，所以我们给eachPage,currentPage属性单独设置set用以实现数据双向绑定
    ...mapState(["shops", "totalPage", "count"]),
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
    ...mapActions(["getShopByPageAsync", "auditPass"]),
    ...mapMutations(["setCurrentPage", "setEachPage"]),
    geshi(row, column, cellValue, index) {
      // console.log(row,column,cellValue,index);
      return row.userID.userName;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(this, row);
      if (this.auditPass({ _id: row._id })) {
        alert("成功");
      }
    }
  }
};
</script>

<style scoped>
</style>
