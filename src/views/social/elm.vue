<template>
  <div class="helloworld-app">
    <div class="app-content" ref="container"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Graph } from '@antv/x6'
import dagre from 'dagre'

const graphData = {
  nodes: [
    {
      id: '1',
      data: {
        description: 'This is node 1.',
      },
      width: 100,
      height: 40,
    },
    {
      id: '2',
      data: {
        description: 'This is node 2.'
      },
      width: 100,
      height: 40,
    },
    {
      id: '3',
      data: {
        description: 'This is node 3.'
      },
      width: 100,
      height: 40,
    },
    {
      id: '4',
      data: {
        description: 'This is node 4.'
      },
      width: 100,
      height: 40,
    }
  ],
  edges: [
    {
      source: '1',
      target: '2',
    },
    {
      source: '1',
      target: '3',
    },
    {
      source: '2',
      target: '4',
    }
  ]
};

const g = new dagre.graphlib.Graph();

// Set an object for the graph label
g.setGraph({});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function () { return {}; });

graphData.nodes.forEach(node => {
  g.setNode(node.id, { id: node.id, label: node.id, width: node.width, height: node.height });
})

graphData.edges.forEach(node => {
  g.setEdge(node.source, node.target);
})

dagre.layout(g);

const data = {
  nodes: [],
  edges: graphData.edges.map(edge => ({
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
};

g.nodes().forEach(function (v) {
  //  console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
  data.nodes.push(g.node(v))
});

console.log(data)


export default {
  name: 'Example',
  setup() {
    const container = ref(null)
    onMounted(() => {
      const graph = new Graph({
        container: container.value,
        background: {
          color: '#F2F7FA',
        },
      })

      graph.fromJSON(data)
      graph.centerContent()
    })

    return {
      container,
    }
  },
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