import '@xyflow/react/dist/style.css';
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { CircleDashed, MessageSquare, MessagesSquare } from 'lucide-react';
function SystemNode({ data }) {
  return (
    <div className="px-4 py-3 rounded-lg bg-[#2d2159] border border-purple-600 min-w-[200px]">
      <div className="flex items-center mb-1">
        <div className="bg-purple-700 rounded-full p-1 mr-2">
          <CircleDashed size={16} className="text-white" />
        </div>
        <span className="text-white font-medium">system</span>
      </div>
      <div className="text-white font-medium mb-1">{data.label}</div>
      <div className="text-gray-300 text-sm">{data.description}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-purple-500" />

    </div>);

}
function InputNode({ data }) {
  return (
    <div className="px-4 py-3 rounded-lg bg-[#1f2b44] border border-blue-600 min-w-[200px]">
      <div className="flex items-center mb-1">
        <div className="bg-blue-700 rounded-full p-1 mr-2">
          <MessageSquare size={16} className="text-white" />
        </div>
        <span className="text-white font-medium">input</span>
      </div>
      <div className="text-white font-medium mb-1">{data.label}</div>
      <div className="text-gray-300 text-sm">{data.description}</div>
      <div className="bg-[#2a3a5a] rounded p-2 mt-2 text-gray-300 text-sm">
        {'{input}'}
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500" />

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500" />

    </div>);

}
function OutputNode({ data }) {
  return (
    <div className="px-4 py-3 rounded-lg bg-[#1d3629] border border-green-600 min-w-[200px]">
      <div className="flex items-center mb-1">
        <div className="bg-green-700 rounded-full p-1 mr-2">
          <MessagesSquare size={16} className="text-white" />
        </div>
        <span className="text-white font-medium">output</span>
      </div>
      <div className="text-white font-medium mb-1">{data.label}</div>
      <div className="text-gray-300 text-sm">{data.description}</div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-green-500" />

    </div>);

}
export const NodeTypes = {
  systemNode: SystemNode,
  inputNode: InputNode,
  outputNode: OutputNode
};