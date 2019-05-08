<template>
  <div>
    <el-table :data="shops"  border style="width: 100%">
    <el-table-column prop="shopName" label="门店名称"></el-table-column>
    <el-table-column prop="shopAdd" label="门店地址"></el-table-column>
    <el-table-column prop="shopTel" label="联系方式"></el-table-column>
    <el-table-column prop="shopStatus" :formatter="formatStatus" label="状态"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        
        <el-button type="text" size="mini" @click="setShop(scope.row)"  v-if="scope.row.shopStatus===1">
<i class="fa fa-ban"></i> 设置门店
</el-button>
        
      </template>
    </el-table-column>
  </el-table>
  
    <el-pagination
      @size-change="setPage"
      @current-change="setCurrentPage"
      :current-page="currentPage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  <router-view></router-view>
  </div>
 
</template>

<script>
import { fetchData } from "../../server/fetch";
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapMutations,mapActions}=createNamespacedHelpers('shop')
export default {
 
  watch: {
        eachPage(){
            this.getShopByIdAsync(document.cookie.slice(7))
        },
        currentPage(){
            this.getShopByIdAsync(document.cookie.slice(7))
        }
  },
  computed: {
    ...mapState(['shops','count']),
    eachPage:{
            get:mapState(['eachPage']).eachPage,
            set:mapMutations(['setPage']).setPage
        },
        currentPage:{
            get:mapState(['currentPage']).currentPage,
            set:mapMutations(['setCurrentPage']).setCurrentPage
        }
  },
  mounted() {
    this.getShopByIdAsync(document.cookie.slice(7))
  },
  methods: {
   ...mapActions(['getShopByIdAsync']),
   ...mapMutations(['setCurrentPage','setPage']),
   formatStatus(row){
     return row.shopStatus===1?'已通过':'申请中'
   },
   setShop(param){
     this.$router.push({name:'shopDetails',params:{param}});
   }
  }
};
</script>

<style scoped>
</style>
