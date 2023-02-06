<template>
  <div class="base-side-nav">
    <el-menu
      default-active="1"
      :default-openeds="['1', '1-1']"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#262626"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>社媒运营</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">WA</template>
            <el-menu-item index="/social/agent">坐席管理</el-menu-item>
            <el-menu-item index="/social/account">账号管理</el-menu-item>
            <el-menu-item index="/social/send">群发任务中心</el-menu-item>
        </el-submenu>
        <el-menu-item index="/download">客户端下载</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'baseSideNav',
    // props: {
    //   navData
    // },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
.base-side-nav {
  width: 200px;
  height: calc(100vh - 70px);
  position: absolute;
  top: 54px;
  left: 0;
  padding-top: 16px;

  .el-menu-vertical-demo {
    background-color: #fff !important;
    border: 0;
  }
  ::v-deep .el-menu .el-menu-item:hover {
    outline: 0 !important;
    color: #FF7B00 !important;
    background: #FFF4ED !important;
  }
  ::v-deep .el-menu .el-menu-item, .el-submenu__title {
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
  }
  // ::v-deep .el-menu .el-submenu__title {
  //   outline: 0 !important;
  //   // color: #262626 !important;
  //   // background: #fff !important;
  // }
  ::v-deep .el-menu .el-menu-item.is-active {
      border-left: 2px solid #FF7B00;
      color: #FF7B00 !important;
      background: #FFF4ED!important;
  }
  ::v-deep .el-submenu__title:hover {
    color: #FF7B00 !important;
    background: #FFF4ED !important;
  }

}
</style>