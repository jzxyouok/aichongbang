<template>
  <el-card>
    <el-container>
      <el-header>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-button type="primary" icon="el-icon-edit" circle  ></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteService"></el-button>
      </el-header>
      <!-- main -->
      <el-main>
        <el-table
          ref="multipleTable"
          :data="services"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="serviceName" label="名称" width="120"></el-table-column>
          <el-table-column prop="serviceType" label="品类"></el-table-column>
          <el-table-column prop="serviceCanFor" label="适用规格"></el-table-column>
          <el-table-column prop="serviceDetial" label="服务规格"></el-table-column>
          <el-table-column prop="serviceTime" label="耗时"></el-table-column>
          <el-table-column prop="serviceLevel" label="服务员等级"></el-table-column>
          <el-table-column prop="servicePrice" label="价格"></el-table-column>
          <el-table-column prop="serviceSchedule" label="预约时间"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </el-main>
      <!-- 底部分页 -->
      <el-footer>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </el-footer>
    </el-container>
  </el-card>
</template>

<script>
import { fetchPost } from "../../server/fetch.js";
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} = createNamespacedHelpers("service");
export default {
  watch: {
    //使用侦听器watch监听eachPage,currentPage这两个属性的变化
    eachPage() {
      this.currentPage = 1;
      this.getServiceByPageAsync();
    },
    currentPage() {
      this.getServiceByPageAsync();
    }
  },
  mounted() {
    this.getServiceByPageAsync();
  },
  computed: {
    //因为计算属性，默认只有get方法，所以我们给eachPage,currentPage属性单独设置set用以实现数据双向绑定
    ...mapState(["services", "totalPage", "count"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurrentPage"]).setCurrentPage
    }
  },
  data() {
    return {
      multipleSelection: [],
      input: "",
      select: "",
      currentPage2: 2 //分页的page
    };
  },
  methods: {
    ...mapActions( ["getServiceByPageAsync", "auditPass"]),
    ...mapMutations( ["setCurrentPage", "setEachPage", "deleteService"]),
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页的方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getServiceByPageAsync();
  }
};
</script>


<style scoped>
.search {
  margin-left: 25px;
  margin-right: 10px;
  width: 500px;
  display: inline-block;
}
</style>