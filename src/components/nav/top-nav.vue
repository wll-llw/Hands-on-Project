<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <div class="logo">XT</div>
      <el-divider class="divider" direction="vertical"></el-divider>
      <el-dropdown>
        <span class="el-dropdown-link">
          客户管理
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input
        v-model="input"
        suffix-icon="el-icon-search"
        placeholder="所属类目：CRM所有类目"
      >
      </el-input>
    </div>
    <div class="top-nav-right">
      <span class="divide">邀好友，领八八六六券嗨</span>
      <i class="el-icon-suitcase divide"></i>
      <i class="el-icon-present divide"></i>
      <i class="el-icon-bell"></i>
      <el-divider class="divider" direction="vertical"></el-divider>
      <el-avatar :size="size" :src="circleUrl"></el-avatar>
      <el-dropdown>
        <i class="el-icon-caret-bottom divide-right"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script>
import circleUrl from '@/assets/头像.jpg'

export default {
  name: 'topNav',
  data () {
    return {
      input: '',
      size: 'large',
      circleUrl,
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 60px);
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #041233;
    padding: 0 30px;

    .divider {
      margin: 0 25px;
    }
    .top-nav-left {
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .logo {
        color: #FF934A;
        font: 24px fantasy;
      }

      .el-dropdown-link {
        // font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #fff;
      }

      ::v-deep .el-input__inner {
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
      }
      ::v-deep .el-input {
        width: 406px;
        margin-left: 50px;
      }

    }

    .top-nav-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      .divide {
        margin-right: 24px;
      }
      .divide-right {
        // cursor: pointer;
        margin-left: 8px;
        color: #fff;
      }
    }
  }
</style>>