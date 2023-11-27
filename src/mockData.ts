export const graphData = {
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
