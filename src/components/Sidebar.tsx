import React from 'react';
import {
  CircleDashed,
  FileText,
  MessageSquare,
  MessagesSquare,
  FileCode,
  Database,
  Activity,
  Clipboard,
  Settings } from
'lucide-react';
export function Sidebar() {
  return (
    <div className="w-48 bg-[#1a1a1a] border-r border-[#333] flex flex-col">
      <div className="p-4 border-b border-[#333]">
        <h2 className="text-white font-semibold mb-1">AI Flow Builder</h2>
        <p className="text-gray-400 text-xs">
          Drag nodes to create your custom AI thinking flow
        </p>
      </div>
      <div className="flex border-b border-[#333]">
        <button className="flex-1 py-2 px-4 text-white text-sm flex items-center justify-center border-b-2 border-purple-600">
          <FileText size={16} className="mr-1.5" />
          Lab
        </button>
        <button className="flex-1 py-2 px-4 text-gray-400 text-sm flex items-center justify-center">
          <Activity size={16} className="mr-1.5" />
          Test
        </button>
      </div>
      <div className="p-3 flex items-center">
        <CircleDashed size={16} className="text-gray-400 mr-2" />
        <span className="text-gray-300 text-sm">Getting Started</span>
      </div>
      <div className="p-3">
        <h3 className="text-gray-400 text-xs uppercase mb-2 font-semibold">
          Node Types
        </h3>
        <div className="space-y-2">
          <NodeType
            icon={<CircleDashed size={16} className="text-purple-400" />}
            label="System Prompt"
            description="Sets AI personality and behavior" />

          <NodeType
            icon={<MessageSquare size={16} className="text-blue-400" />}
            label="User Input"
            description="Processes user message" />

          <NodeType
            icon={<MessagesSquare size={16} className="text-green-400" />}
            label="AI Response"
            description="Generates AI reply" />

          <NodeType
            icon={<Activity size={16} className="text-yellow-400" />}
            label="Action"
            description="Performs a specific task" />

          <NodeType
            icon={<FileCode size={16} className="text-red-400" />}
            label="API Call"
            description="Connect to external services" />

          <NodeType
            icon={<Settings size={16} className="text-gray-400" />}
            label="Configuration"
            description="Adjust model parameters" />

          <NodeType
            icon={<Clipboard size={16} className="text-indigo-400" />}
            label="Clipboard"
            description="Store and retrieve content" />

        </div>
      </div>
    </div>);

}
function NodeType({ icon, label, description }) {
  return (
    <div className="flex items-start p-2 rounded hover:bg-[#252525] cursor-grab">
      <div className="mt-0.5 mr-2">{icon}</div>
      <div>
        <div className="text-white text-sm">{label}</div>
        <div className="text-gray-400 text-xs">{description}</div>
      </div>
    </div>);

}