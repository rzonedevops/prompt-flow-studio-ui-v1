import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
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
          <h1 className="text-white text-lg font-semibold">Terms of Service</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-gray-400 text-sm mb-8">
            Last updated: February 1, 2024
          </div>

          <div className="prose prose-invert max-w-none">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing and using AI Flow Builder ("the Service"), you accept and agree to be
                bound by the terms and provision of this agreement. If you do not agree to these
                Terms of Service, please do not use the Service.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                AI Flow Builder is a visual workflow builder that allows users to create custom AI
                thinking flows. The Service provides tools for designing, testing, and deploying AI
                workflows.
              </p>
            </Section>

            <Section title="3. User Accounts">
              <p>
                To access certain features of the Service, you may be required to create an account.
                You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
              </ul>
            </Section>

            <Section title="4. Acceptable Use">
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service for any commercial purposes without authorization</li>
              </ul>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                The Service and its original content, features, and functionality are owned by AI
                Flow Builder and are protected by international copyright, trademark, patent, trade
                secret, and other intellectual property laws.
              </p>
              <p>
                You retain all rights to the workflows and content you create using the Service.
                However, you grant us a license to use, store, and display your content solely for
                the purpose of providing the Service.
              </p>
            </Section>

            <Section title="6. Data and Privacy">
              <p>
                Your use of the Service is also governed by our Privacy Policy. Please review our
                Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </Section>

            <Section title="7. API Usage and Limits">
              <p>
                The Service may integrate with third-party APIs and services. You are responsible
                for complying with the terms of service of any third-party services you connect to
                through the Service.
              </p>
              <p>
                We reserve the right to impose usage limits on API calls and other features to
                ensure fair use and system stability.
              </p>
            </Section>

            <Section title="8. Termination">
              <p>
                We reserve the right to terminate or suspend your account and access to the Service
                at our sole discretion, without notice, for conduct that we believe violates these
                Terms of Service or is harmful to other users, us, or third parties, or for any
                other reason.
              </p>
            </Section>

            <Section title="9. Disclaimers">
              <p>
                The Service is provided "as is" and "as available" without warranties of any kind,
                either express or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We do not guarantee that the Service will be uninterrupted, timely, secure, or
                error-free.
              </p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p>
                In no event shall AI Flow Builder, its directors, employees, partners, agents,
                suppliers, or affiliates be liable for any indirect, incidental, special,
                consequential, or punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses.
              </p>
            </Section>

            <Section title="11. Changes to Terms">
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-purple-400">support@aiflowbuilder.com</p>
            </Section>
          </div>

          <div className="mt-8 pt-8 border-t border-[#333] text-center">
            <button
              onClick={() => navigate('/privacy')}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              View Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-300 space-y-4">
        {children}
      </div>
    </div>
  );
}
