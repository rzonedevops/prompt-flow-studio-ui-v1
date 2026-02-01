import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Twitter, Linkedin, Globe, Heart, Users, Zap } from 'lucide-react';

export function About() {
  const navigate = useNavigate();

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
          <h1 className="text-white text-lg font-semibold">About</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="h-16 w-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-white" />
            </div>
            <h2 className="text-white text-3xl font-bold mb-2">AI Flow Builder</h2>
            <p className="text-gray-400 text-lg">Build custom AI thinking flows with ease</p>
            <p className="text-gray-500 text-sm mt-2">Version 1.0.0</p>
          </div>

          {/* Mission */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              We're building the future of AI-powered workflows. Our mission is to make AI accessible
              and customizable for everyone. With AI Flow Builder, you can create sophisticated AI
              thinking processes without writing a single line of code.
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard
                icon={<Zap size={24} className="text-purple-400" />}
                title="Visual Flow Builder"
                description="Drag and drop nodes to create complex AI workflows"
              />
              <FeatureCard
                icon={<Users size={24} className="text-blue-400" />}
                title="Collaborative"
                description="Work together with your team in real-time"
              />
              <FeatureCard
                icon={<Globe size={24} className="text-green-400" />}
                title="API Integration"
                description="Connect to external services and APIs seamlessly"
              />
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">Built With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TechItem name="React" />
              <TechItem name="TypeScript" />
              <TechItem name="Tailwind CSS" />
              <TechItem name="React Flow" />
              <TechItem name="Vite" />
              <TechItem name="React Router" />
              <TechItem name="Lucide Icons" />
              <TechItem name="Node.js" />
            </div>
          </div>

          {/* Team */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">The Team</h3>
            <p className="text-gray-300 mb-4">
              AI Flow Builder is developed by a passionate team of engineers, designers, and AI
              enthusiasts dedicated to making AI technology more accessible.
            </p>
            <div className="flex items-center text-gray-400">
              <Heart size={16} className="text-red-500 mr-2" />
              <span className="text-sm">Made with love by the RZone DevOps team</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <SocialLink icon={<Github size={20} />} label="GitHub" href="#" />
              <SocialLink icon={<Twitter size={20} />} label="Twitter" href="#" />
              <SocialLink icon={<Linkedin size={20} />} label="LinkedIn" href="#" />
              <SocialLink icon={<Globe size={20} />} label="Website" href="#" />
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-4">
              <button
                onClick={() => navigate('/privacy')}
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/terms')}
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </button>
            </div>
            <p className="text-gray-500 text-xs">
              © 2024 AI Flow Builder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#252525] rounded-lg p-4">
      <div className="mb-3">{icon}</div>
      <h4 className="text-white text-sm font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  );
}

function TechItem({ name }) {
  return (
    <div className="bg-[#252525] rounded px-3 py-2 text-center">
      <span className="text-gray-300 text-sm">{name}</span>
    </div>
  );
}

function SocialLink({ icon, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center bg-[#252525] px-4 py-2 rounded hover:bg-[#333] transition-colors"
    >
      <span className="text-gray-400 mr-2">{icon}</span>
      <span className="text-gray-300 text-sm">{label}</span>
    </a>
  );
}
