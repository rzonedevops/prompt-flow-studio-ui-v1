import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Book,
  MessageCircle,
  Video,
  FileText,
  ChevronRight,
  Mail,
  ExternalLink
} from 'lucide-react';

export function Help() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

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
          <h1 className="text-white text-lg font-semibold">Help & Documentation</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#444] rounded pl-10 pr-4 py-3 text-white"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <QuickLink
              icon={<Book size={24} className="text-purple-400" />}
              title="Documentation"
              description="Comprehensive guides"
              href="#"
            />
            <QuickLink
              icon={<Video size={24} className="text-blue-400" />}
              title="Video Tutorials"
              description="Learn by watching"
              href="#"
            />
            <QuickLink
              icon={<MessageCircle size={24} className="text-green-400" />}
              title="Community"
              description="Join discussions"
              href="#"
            />
            <QuickLink
              icon={<Mail size={24} className="text-yellow-400" />}
              title="Contact Support"
              description="Get help from our team"
              href="#"
            />
          </div>

          {/* Getting Started */}
          <div className="mb-8">
            <h2 className="text-white text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
              <HelpArticle
                title="Introduction to AI Flow Builder"
                description="Learn the basics of creating AI workflows"
              />
              <HelpArticle
                title="Creating Your First Flow"
                description="Step-by-step guide to building a simple flow"
              />
              <HelpArticle
                title="Understanding Node Types"
                description="Explore all available node types and their uses"
              />
              <HelpArticle
                title="Connecting Nodes"
                description="How to create relationships between nodes"
              />
            </div>
          </div>

          {/* Popular Topics */}
          <div className="mb-8">
            <h2 className="text-white text-2xl font-semibold mb-4">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TopicCard
                title="Working with System Prompts"
                items={[
                  'Defining AI personality',
                  'Setting behavior constraints',
                  'Best practices for prompts',
                  'Common prompt patterns'
                ]}
              />
              <TopicCard
                title="API Integration"
                items={[
                  'Connecting external services',
                  'API authentication',
                  'Handling responses',
                  'Error handling'
                ]}
              />
              <TopicCard
                title="Flow Management"
                items={[
                  'Saving and loading flows',
                  'Exporting flows',
                  'Version control',
                  'Collaboration features'
                ]}
              />
              <TopicCard
                title="Testing & Debugging"
                items={[
                  'Running test scenarios',
                  'Debugging node issues',
                  'Performance optimization',
                  'Troubleshooting common errors'
                ]}
              />
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-8">
            <h2 className="text-white text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
              <FAQItem
                question="How do I save my flow?"
                answer="Click the 'Save' button in the header toolbar. Your flow will be automatically saved to your workspace."
              />
              <FAQItem
                question="Can I export my flows?"
                answer="Yes, use the 'Export' button to download your flow as a JSON file. You can import it later or share it with others."
              />
              <FAQItem
                question="What AI models are supported?"
                answer="We support GPT-4, GPT-3.5 Turbo, Claude 3, and Gemini Pro. You can select your preferred model in Settings."
              />
              <FAQItem
                question="How do I connect to external APIs?"
                answer="Use the API Call node type and configure the endpoint, authentication, and parameters in the node properties panel."
              />
            </div>
          </div>

          {/* Support */}
          <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-2">Still need help?</h3>
            <p className="text-gray-300 mb-4">
              Our support team is here to help you with any questions or issues.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center">
              <Mail size={16} className="mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <a
      href={href}
      className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-purple-600 transition-colors"
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-white text-sm font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-xs">{description}</p>
    </a>
  );
}

function HelpArticle({ title, description }: { title: string; description: string }) {
  return (
    <button className="w-full flex items-center justify-between p-3 rounded hover:bg-[#252525] text-left">
      <div className="flex items-center">
        <FileText size={18} className="text-purple-400 mr-3" />
        <div>
          <div className="text-white text-sm">{title}</div>
          <div className="text-gray-400 text-xs">{description}</div>
        </div>
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  );
}

function TopicCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4">
      <h3 className="text-white text-sm font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-400 text-xs">
            <ChevronRight size={14} className="mr-2 text-purple-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="pb-4 border-b border-[#333] last:border-b-0">
      <h4 className="text-white text-sm font-semibold mb-2">{question}</h4>
      <p className="text-gray-400 text-sm">{answer}</p>
    </div>
  );
}
