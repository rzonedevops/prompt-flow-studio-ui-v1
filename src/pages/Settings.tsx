import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, Bell, Shield, Palette, Globe } from 'lucide-react';

export function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="flex flex-col h-screen w-full bg-[#121212]">
      <div className="h-14 bg-[#1a1a1a] border-b border-[#333] flex items-center justify-between px-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-400 hover:text-white mr-4"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-white text-lg font-semibold">Settings</h1>
        </div>
        <button className="flex items-center bg-purple-600 text-white text-sm px-3 py-1.5 rounded">
          <Save size={16} className="mr-1.5" />
          Save Changes
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-[#1a1a1a] border-r border-[#333] overflow-y-auto">
          <div className="p-4">
            <h2 className="text-gray-400 text-xs uppercase mb-4 font-semibold">Settings</h2>
            <SettingsTab
              icon={<User size={18} />}
              label="General"
              active={activeTab === 'general'}
              onClick={() => setActiveTab('general')}
            />
            <SettingsTab
              icon={<Palette size={18} />}
              label="Appearance"
              active={activeTab === 'appearance'}
              onClick={() => setActiveTab('appearance')}
            />
            <SettingsTab
              icon={<Bell size={18} />}
              label="Notifications"
              active={activeTab === 'notifications'}
              onClick={() => setActiveTab('notifications')}
            />
            <SettingsTab
              icon={<Shield size={18} />}
              label="Privacy & Security"
              active={activeTab === 'privacy'}
              onClick={() => setActiveTab('privacy')}
            />
            <SettingsTab
              icon={<Globe size={18} />}
              label="Language & Region"
              active={activeTab === 'language'}
              onClick={() => setActiveTab('language')}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl">
            {activeTab === 'general' && <GeneralSettings />}
            {activeTab === 'appearance' && <AppearanceSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'privacy' && <PrivacySettings />}
            {activeTab === 'language' && <LanguageSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsTab({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center p-3 rounded mb-1 ${
        active ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-[#252525] hover:text-white'
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span className="text-sm">{label}</span>
    </button>
  );
}

function GeneralSettings() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-6">General Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Workspace Name</label>
          <input
            type="text"
            className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white"
            placeholder="My Workspace"
            defaultValue="AI Flow Builder Workspace"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Default Model</label>
          <select className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white">
            <option>GPT-4</option>
            <option>GPT-3.5 Turbo</option>
            <option>Claude 3</option>
            <option>Gemini Pro</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Auto-save Interval</label>
          <select className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white">
            <option>Every 30 seconds</option>
            <option>Every 1 minute</option>
            <option>Every 5 minutes</option>
            <option>Manual only</option>
          </select>
        </div>

        <div className="flex items-center">
          <input type="checkbox" id="confirmDelete" className="mr-2" defaultChecked />
          <label htmlFor="confirmDelete" className="text-gray-300 text-sm">
            Confirm before deleting nodes
          </label>
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-6">Appearance</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Theme</label>
          <div className="grid grid-cols-3 gap-4">
            <ThemeOption label="Dark" active={true} />
            <ThemeOption label="Light" active={false} />
            <ThemeOption label="Auto" active={false} />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Accent Color</label>
          <div className="flex gap-3">
            <ColorOption color="bg-purple-600" active={true} />
            <ColorOption color="bg-blue-600" active={false} />
            <ColorOption color="bg-green-600" active={false} />
            <ColorOption color="bg-red-600" active={false} />
            <ColorOption color="bg-yellow-600" active={false} />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Font Size</label>
          <select className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-6">Notifications</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded">
          <div>
            <div className="text-white text-sm">Flow Execution Complete</div>
            <div className="text-gray-400 text-xs">Get notified when flows finish running</div>
          </div>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded">
          <div>
            <div className="text-white text-sm">Error Alerts</div>
            <div className="text-gray-400 text-xs">Get notified when errors occur</div>
          </div>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded">
          <div>
            <div className="text-white text-sm">Collaboration Updates</div>
            <div className="text-gray-400 text-xs">Get notified about team activity</div>
          </div>
          <input type="checkbox" />
        </div>

        <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded">
          <div>
            <div className="text-white text-sm">Product Updates</div>
            <div className="text-gray-400 text-xs">Get notified about new features</div>
          </div>
          <input type="checkbox" defaultChecked />
        </div>
      </div>
    </div>
  );
}

function PrivacySettings() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-6">Privacy & Security</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-[#1a1a1a] rounded">
          <h3 className="text-white text-sm font-semibold mb-2">Data Collection</h3>
          <p className="text-gray-400 text-sm mb-4">
            We collect usage data to improve the product. You can opt out at any time.
          </p>
          <div className="flex items-center">
            <input type="checkbox" id="analytics" className="mr-2" defaultChecked />
            <label htmlFor="analytics" className="text-gray-300 text-sm">
              Share anonymous usage data
            </label>
          </div>
        </div>

        <div className="p-4 bg-[#1a1a1a] rounded">
          <h3 className="text-white text-sm font-semibold mb-2">API Keys</h3>
          <p className="text-gray-400 text-sm mb-4">
            Your API keys are encrypted and stored securely.
          </p>
          <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded">
            Manage API Keys
          </button>
        </div>

        <div className="p-4 bg-[#1a1a1a] rounded">
          <h3 className="text-white text-sm font-semibold mb-2">Data Export</h3>
          <p className="text-gray-400 text-sm mb-4">
            Download all your data in a portable format.
          </p>
          <button className="bg-[#2a2a2a] text-white text-sm px-4 py-2 rounded">
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
}

function LanguageSettings() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-6">Language & Region</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Language</label>
          <select className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white">
            <option>English (US)</option>
            <option>English (UK)</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Japanese</option>
            <option>Chinese (Simplified)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Time Zone</label>
          <select className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white">
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC-5 (Eastern Time)</option>
            <option>UTC+0 (GMT)</option>
            <option>UTC+1 (Central European Time)</option>
            <option>UTC+9 (Japan Standard Time)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Date Format</label>
          <select className="w-full bg-[#1a1a1a] border border-[#444] rounded p-2 text-white">
            <option>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function ThemeOption({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      className={`p-3 border rounded text-center cursor-pointer ${
        active
          ? 'border-purple-600 bg-purple-600/10 text-purple-400'
          : 'border-[#444] text-gray-400 hover:border-gray-300'
      }`}
    >
      {label}
    </div>
  );
}

function ColorOption({ color, active }: { color: string; active: boolean }) {
  return (
    <div
      className={`w-10 h-10 rounded cursor-pointer border-2 ${color} ${
        active ? 'border-white' : 'border-transparent'
      }`}
    />
  );
}
