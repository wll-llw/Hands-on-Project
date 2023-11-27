<template>
  <div class="send wrap">
    <div ref="container" style="width: 800px; height: 600px"></div>
  </div>
</template>

<script>
import './style.scss'
import {  Graph, Node, Edge, Shape } from "@antv/x6";
export default {
  data() {
    return {
      graph: null,
    }
  },
  mounted() {
    this.initGraph()
  },
  methods: {
    initGraph() {
      // 创建一个X6图表
      this.graph = new Graph({
        container: this.$refs.container,
        async: true,
        frozen: true,
        scroller: true,
        interacting: false,
        sorting: 'approx',
        connecting: {
          anchor: 'orth',
          connector: 'rounded',
          connectionPoint: 'boundary',
          router: {
            name: 'er',
            args: {
              offset: 24,
              direction: 'H'
            }
          }
        }
      });
    },

    addNode(x, y, label) {
      // 添加节点
      this.graph.addNode({
        x,
        y,
        width: 100,
        height: 40,
        shape: 'card-node',
        label: label,
      });
    },

    addEdge(sourceId, targetId) {
      // 添加边
      this.graph.addEdge({
        source: { cell: sourceId },
        target: { cell: targetId },
      });
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
