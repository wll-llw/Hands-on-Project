<template>
  <div class="helloworld-app">
    <div class="app-content" ref="container" id="graph-container"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'
import dagre from 'dagre'
import { data } from '@/mockData.ts'

const g = new dagre.graphlib.Graph()

export default {
  name: 'TreeNode',
  data() {
    return {
      treeData: null,
      graphData: null,
    }
  },
  created() {
    this.graphData = this.flattenData(data.data_list)
  },
  mounted() {
    this.init()
    this.treeData = {
      nodes: [],
      edges: this.graphData.edges.map((edge) => ({
        ...edge,
        shape: 'edge',
        router: {
          name: 'orth',
        },
        sourceAnchor: {
          name: 'bottom',
          args: {
            dx: 0,
            dy: 0,
          },
        },
        targetAnchor: {
          name: 'top',
          args: {
            dx: 0,
            dy: 0,
          },
        },
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
      width: '100%',
      height: '100%',
      movable: true, // 启用图的拖拽功能
      zoomable: true, // 启用图的缩放功能
      interactive: true, // 启用图的交互功能
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

      this.graphData.nodes.forEach((node) => {
        g.setNode(node.id, {
          id: node.id,
          label: node.data.description,
          width: 200,
          height: 40,
        })
      })

      this.graphData.edges.forEach((node) => {
        g.setEdge(node.source, node.target)
      })

      dagre.layout(g)
    },

    flattenData(data) {
      const flattenNodes = [];
      const flattenEdges = [];

      function traverse(node, parentId = null) {
        const nodeId = node.client_id.toString();
        const newNode = {
          id: nodeId,
          data: {
            description: node.client_name
          },
          width: 100,
          height: 40
        };

        flattenNodes.push(newNode);

        if (parentId) {
          flattenEdges.push({
            source: parentId,
            target: nodeId
          });
        }

        if (node.next_list && node.next_list.length > 0) {
          node.next_list.forEach(nextNode => {
            traverse(nextNode, nodeId);
          });
        }
      }

      data.forEach(node => {
        traverse(node);
      });

      return {
        nodes: flattenNodes,
        edges: flattenEdges
      };
    },
  }
}
</script>

<style scoped>
/* 根据需要添加样式 */
.helloworld-app {
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0;
  font-family: sans-serif;
}

.app-content {
  flex: 1;
  height: 100%;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 5px;
  box-shadow: 0 12px 5px -10px rgb(0 0 0 / 10%), 0 0 4px 0 rgb(0 0 0 / 10%);
}
</style>