<template>
  <div class="home">
    <!-- <top-nav></top-nav> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/components/nav/top-nav.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TopNav
  }
}
</script>
