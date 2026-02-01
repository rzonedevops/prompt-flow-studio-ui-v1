import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState } from
'@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeTypes } from './NodeTypes';
const initialNodes = [
{
  id: '1',
  type: 'systemNode',
  position: {
    x: 250,
    y: 150
  },
  data: {
    label: 'System Prompt',
    description: 'Defines AI behavior & personality'
  }
},
{
  id: '2',
  type: 'inputNode',
  position: {
    x: 250,
    y: 350
  },
  data: {
    label: 'User Input',
    description: 'Process user messages'
  }
},
{
  id: '3',
  type: 'outputNode',
  position: {
    x: 250,
    y: 550
  },
  data: {
    label: 'AI Response',
    description: 'Generate AI reply'
  }
}];

const initialEdges = [
{
  id: 'e1-2',
  source: '1',
  target: '2'
},
{
  id: 'e2-3',
  source: '2',
  target: '3'
}];

export function Canvas({ onNodeSelect }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onNodeClick = (_, node) => {
    onNodeSelect(node);
  };
  return (
    <div className="flex-1 h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={NodeTypes}
        fitView>

        <Background color="#333" gap={16} />
        <Controls />
      </ReactFlow>
    </div>);

}