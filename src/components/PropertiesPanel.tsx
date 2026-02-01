import React from 'react';
import { InfoIcon } from 'lucide-react';
export function PropertiesPanel({ selectedNode }) {
  if (!selectedNode) {
    return (
      <div className="w-64 bg-[#1a1a1a] border-l border-[#333] p-4">
        <div className="text-gray-400 text-sm text-center mt-8">
          Select a node to edit its properties
        </div>
      </div>);

  }
  const getNodeTypeLabel = (type) => {
    switch (type) {
      case 'systemNode':
        return 'System';
      case 'inputNode':
        return 'Input';
      case 'outputNode':
        return 'Output';
      default:
        return type;
    }
  };
  const getNodeDescription = (type) => {
    switch (type) {
      case 'systemNode':
        return 'Sets AI personality and behavior';
      case 'inputNode':
        return 'Define AI behavior, personality, and instruction set';
      case 'outputNode':
        return 'Generate AI response based on input';
      default:
        return '';
    }
  };
  return (
    <div className="w-64 bg-[#1a1a1a] border-l border-[#333] overflow-y-auto">
      <div className="p-4 border-b border-[#333]">
        <h2 className="text-white font-semibold">Properties</h2>
        <p className="text-gray-400 text-xs">Configure the selected node</p>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <label className="block text-gray-400 text-xs mb-1">Node Type</label>
          <div className="flex items-center">
            <InfoIcon size={16} className="text-purple-400 mr-2" />
            <span className="text-white">
              {getNodeTypeLabel(selectedNode.type)}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-xs mb-1">Label</label>
          <input
            type="text"
            className="w-full bg-[#252525] border border-[#444] rounded p-2 text-white"
            value={selectedNode.data.label}
            readOnly />

        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-xs mb-1">
            Description
          </label>
          <textarea
            className="w-full bg-[#252525] border border-[#444] rounded p-2 text-white h-20 resize-none"
            value={selectedNode.data.description}
            readOnly />

        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-xs mb-1">Content</label>
          <textarea
            className="w-full bg-[#252525] border border-[#444] rounded p-2 text-white h-32 resize-none"
            placeholder="Enter system content..." />

        </div>
      </div>
    </div>);

}