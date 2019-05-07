<template>
  <el-container class="app-wrapper">
    <!-- 侧边栏 -->
    <el-aside class="aside-wrapper">
      <el-menu
        router
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#565656"
        text-color="#ddd"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">门店管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">审核管理</span>
            <el-menu-item index="1-1">处理申请</el-menu-item>
            <el-menu-item index="1-2">处理修改</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">门店查询</span>
            <el-menu-item index="1-4-1">1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">平台管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">审核用户</span>
            <el-menu-item index="2-1">处理申请</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-1">
            <span slot="title">基础操作</span>
            <el-menu-item index="2-1-1">增加用户</el-menu-item>
            <el-menu-item index="2-1-1">修改用户</el-menu-item>
            <el-menu-item index="2-1-1">删除用户</el-menu-item>
            <el-menu-item index="2-1-1">查看用户</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="/info/goods">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">商品</span>
          </template>
          <el-menu-item-group>
            <span slot="title"></span>
            <el-menu-item index="/info/shenqin">新增商品</el-menu-item>
            <el-menu-item index="/info/show">查看商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="/info/pet">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">宠物</span>
          </template>
          <el-menu-item-group>
            <span slot="title"></span>
            <el-menu-item index="/info/shenqin">新增宠物</el-menu-item>
            <el-menu-item index="/info/show">查看宠物</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="/info/service">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">服务</span>
          </template>
          <el-menu-item-group>
            <span slot="title"></span>
            <el-menu-item index="/info/addService">新增服务</el-menu-item>
            <el-menu-item index="/info/showService">查看服务</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">订单</span>
        </el-menu-item>

        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">门店</span>
          </template>
          <el-menu-item-group>
            <span slot="title"></span>
            <el-menu-item index="/info/shenqin">申请门店</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="6-2">
            <span slot="title">我的门店</span>
            <el-menu-item index="/info/myshop">查看门店</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 主区域 -->
    <el-container class="main-container" :class="{qwe:isCollapse,ewq:!isCollapse}">
      <!-- 头部栏 -->
      <el-header>
        <div class="navbar">
          <div class="hamburger-container" style="padding: 0 15px;" @click="toggleClick">
            <svg
              :class="{'is-active':isCollapse}"
              class="hamburger"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
            >
              <path
                d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
              ></path>
            </svg>
          </div>
          <el-breadcrumb separator="/" class="breadcrumb-container app-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/info' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">活动管理</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="right-menu">
            <el-dropdown class="avatar-container" trigger="click">
              <div class="avatar-wrapper">
                <img
                  src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                  class="user-avatar"
                >
              </div>
              <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link to="/">
                  <el-dropdown-item>Home</el-dropdown-item>
                </router-link>

                <el-dropdown-item divided>
                  <span style="display:block;">Log Out</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <!-- main -->
      <el-main style="background:#f2f2f2">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style>
.ewq {
  margin-left: 210px;
}
.qwe {
  margin-left: 65px;
}
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.el-menu-vertical-demo {
  height: 100%;
  transition: all 8s;
}
.aside-wrapper {
  transition: all 4s;
  width: 210px !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.35s;
  position: relative;
}
.el-header {
  padding: 0 !important;
  height: 50px !important;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
}
.hamburger-container:hover {
  background: rgba(0, 0, 0, 0.025);
}
.hamburger.is-active {
  transform: rotate(180deg);
}
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;
}
.avatar-container {
  margin-right: 30px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
}
.avatar-wrapper {
  margin-top: 5px;
  position: relative;
}
.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.breadcrumb-container {
  float: left;
}
.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  margin-left: 8px;
}
.el-breadcrumb__item {
  line-height: 3.6;
}
</style>