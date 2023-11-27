<template>
  <div ref="echartsContainer" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script>
import * as echarts from 'echarts';

export default{
  props: {
    option: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.initECharts();
  //   监听窗口大小改变事件
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    initECharts() {
      this.chart = echarts.init(this.$refs.echartsContainer);
      this.chart.setOption(this.option);
    },
    handleResize() {
      if (this.chart) {
      //   重新渲染图表
        this.chart.resize();
      }
    }
  },
  watch: {
    option: {
      handler(newOption) {
        if (this.chart) {
          this.chart.setOption(newOption);
        }
      },
      deep: true
    }
  },
  beforeDestroy() {
  //   移除窗口大小改变事件监听
    window.removeEventListener('resize', this.handleResize);
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>
