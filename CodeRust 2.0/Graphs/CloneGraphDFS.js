/**
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
  return linkVertexCopies(graph, hMap);
};

function createVertexCopies (graph, hMap, visited = new Set()) {
  if (!graph) return null;
  visited.add(graph);

  const copyVertex = new UndirectedGraphNode(graph.label);
  hMap.set(graph, copyVertex);

  for (let i = 0; i < graph.neighbors.length; i++) {
    const neighbor = graph.neighbors[i];
    if (!visited.has(neighbor)) {
      createVertexCopies(neighbor, hMap, visited);
    }
  }
}

function linkVertexCopies (graph, hMap, visited = new Set()) {
  if (!graph) return null;
  visited.add(graph);
  const copyVert = hMap.get(graph);

  for (let i = 0; i < graph.neighbors.length; i++) {
    const neighbor = graph.neighbors[i];
    const copyNeighbor = hMap.get(neighbor);
    copyVert.neighbors.push(copyNeighbor);
    if (!visited.has(neighbor)) {
      linkVertexCopies(neighbor, hMap, visited);
    }
  }

  return hMap.get(graph);
}
