import React from 'react';
import {
  FileIcon,
  Save,
  Download,
  Plus,
  RotateCcw,
  HelpCircle,
  Settings } from
'lucide-react';
export function Header() {
  return (
    <div className="h-14 bg-[#1a1a1a] border-b border-[#333] flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="h-8 w-8 bg-purple-600 rounded flex items-center justify-center mr-2">
          <FileIcon size={18} className="text-white" />
        </div>
        <RotateCcw size={16} className="text-gray-400 mx-3 cursor-pointer" />
        <button className="flex items-center bg-[#2a2a2a] text-white text-sm px-3 py-1.5 rounded mx-1">
          <Plus size={16} className="mr-1.5" />
          New
        </button>
        <button className="flex items-center bg-[#2a2a2a] text-white text-sm px-3 py-1.5 rounded mx-1">
          <Save size={16} className="mr-1.5" />
          Save
        </button>
        <button className="flex items-center bg-[#2a2a2a] text-white text-sm px-3 py-1.5 rounded mx-1">
          <Download size={16} className="mr-1.5" />
          Export
        </button>
      </div>
      <div className="flex items-center">
        <button className="flex items-center bg-[#2a2a2a] text-white text-sm px-3 py-1.5 rounded mx-1">
          <HelpCircle size={16} className="mr-1.5" />
          Help
        </button>
        <button className="flex items-center bg-[#2a2a2a] text-white text-sm px-3 py-1.5 rounded mx-1">
          <Settings size={16} className="mr-1.5" />
          Settings
        </button>
        <button className="flex items-center bg-purple-600 text-white text-sm px-3 py-1.5 rounded mx-1">
          <Download size={16} className="mr-1.5" />
          Run Flow
        </button>
      </div>
    </div>);

}