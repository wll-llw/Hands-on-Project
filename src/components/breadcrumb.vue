<template>
  <div class="bread-crumb-wrap">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { watch } from 'vue'
export default {
  name:'Breadcrumb',
  data () {
    return {
      breadcrumb: [],
    }
  },
  created () {
    this.getBreadcrumb()
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      console.log(matched, 'matched')
      //如果不是首页
      if (!matched.length) {
        matched = [{ path: "/home", meta: { title: "工作台" } }]
      } else if (!this.isHome(matched[0])) {
        matched = [{ path: "/home", meta: { title: "工作台" } }].concat(matched);
      }
      this.breadcrumb = matched;
      console.log(this.breadcrumb, 'this.breadcrumb')
    }
  },
}
</script>

<style lang="scss" scoped>
.bread-crumb-wrap {
  position: absolute;
  top: 54px;
  left: 200px;
  width: calc(100vw - 220px);
  height: 48px;
  padding-left: 20px;
  // background-color: yellow;

  ::v-deep .el-breadcrumb {
    line-height: 48px;
  }
}
</style>