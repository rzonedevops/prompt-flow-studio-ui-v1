import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { PropertiesPanel } from './components/PropertiesPanel';
export function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  return (
    <div className="flex flex-col h-screen w-full bg-[#121212]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Canvas onNodeSelect={setSelectedNode} />
        <PropertiesPanel selectedNode={selectedNode} />
      </div>
    </div>);

}