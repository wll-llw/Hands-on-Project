interface INode<T> {
  id: string
  data?: T
  width?: number
  height?: number
}

interface IEdge<T> {
  source: string
  target: string
  data?: T
}

interface Graph<T = unknown, K = unknown> {
  nodes?: INode<T>[]
  edges?: IEdge<K>[]
}


