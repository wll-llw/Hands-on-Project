<template>
  <div class="helloworld-app">
    <div class="app-content" ref="container"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'
import dagre from 'dagre'
import { graphData } from '@/mockData.ts'

const g = new dagre.graphlib.Graph()

export default {
  name: 'Example',
  data() {
    return {
      treeData: null,
    }
  },
  mounted() {
    this.init()
    this.treeData = {
      nodes: [],
      edges: graphData.edges.map((edge) => ({
        ...edge,
        shape: 'edge',
        // label: `${edge.source}-${edge.target}`,
        attrs: {
          // line 是选择器名称，选中的边的 path 元素
          line: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
          },
        },
      })),
    }

    g.nodes().forEach((v) => {
      //  console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
      this.treeData.nodes.push(g.node(v))
    })

    const graph = new Graph({
      container: this.$refs.container,
      background: {
        color: '#F2F7FA',
      },
    })

    graph.fromJSON(this.treeData)
    graph.centerContent()
  },
  methods: {
    init() {
      g.setGraph({})
      g.setDefaultEdgeLabel(function () {
        return {}
      })

      graphData.nodes.forEach((node) => {
        g.setNode(node.id, {
          id: node.id,
          label: node.id,
          width: node.width,
          height: node.height,
        })
      })

      graphData.edges.forEach((node) => {
        g.setEdge(node.source, node.target)
      })

      dagre.layout(g)
    }
  }
}
</script>

<style scoped>
/* 根据需要添加样式 */
.helloworld-app {
  display: flex;
  width: 100%;
  padding: 0;
  font-family: sans-serif;
}

.app-content {
  flex: 1;
  height: 280px;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 5px;
  box-shadow: 0 12px 5px -10px rgb(0 0 0 / 10%), 0 0 4px 0 rgb(0 0 0 / 10%);
}
</style>