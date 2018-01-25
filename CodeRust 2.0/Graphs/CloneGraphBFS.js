/*
Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  const hMap = new Map();
  createVertexCopies(graph, hMap);
  const copyGraph = linkVertexCopies(graph, hMap);
  return copyGraph;
};

function createVertexCopies (graph, hMap) {
  if (!graph) return;

  const queue = [];
  queue.push(graph);
  const visited = new Set();
  visited.add(graph);
  while (queue.length) {
    const curVertex = queue.shift();
    for (let i = 0; i < curVertex.neighbors.length; i++) {
      const neighbor = curVertex.neighbors[i];
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
    const copyVertex = new UndirectedGraphNode(curVertex.label);
    hMap.set(curVertex, copyVertex);
  }
}

function linkVertexCopies (graph, hMap) {
  if (!graph) return null;
  const queue = [];
  queue.push(graph);
  const visited = new Set();
  visited.add(graph);
  while (queue.length) {
    const curVertex = queue.shift();
    const copyVertex = hMap.get(curVertex);
    for (let i = 0; i < curVertex.neighbors.length; i++) {
      const neighbor = curVertex.neighbors[i];
      const copyNeighbor = hMap.get(neighbor);
      copyVertex.neighbors.push(copyNeighbor);
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return hMap.get(graph);
}
