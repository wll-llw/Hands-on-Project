<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <top-nav></top-nav>
    <base-side-nav></base-side-nav>
    <breadcrumb></breadcrumb>
    <router-view/>
  </div>
</template>

<script>
import TopNav from '@/components/nav/top-nav.vue';
import baseSideNav from './components/nav/base-side-nav.vue';
import Breadcrumb from './components/breadcrumb.vue';

export default {
  components: {
    TopNav,
    baseSideNav,
    Breadcrumb
  },
  data () {
    return {
      // navData: 
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
