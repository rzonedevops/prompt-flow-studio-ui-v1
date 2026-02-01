import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Privacy() {
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
          <h1 className="text-white text-lg font-semibold">Privacy Policy</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-gray-400 text-sm mb-8">
            Last updated: February 1, 2024
          </div>

          <div className="prose prose-invert max-w-none">
            <Section title="1. Introduction">
              <p>
                AI Flow Builder ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our Service.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this
                privacy policy, please do not access the Service.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <h3 className="text-white text-lg font-semibold mt-4 mb-2">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Register for an account</li>
                <li>Use the Service</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and email address</li>
                <li>Username and password</li>
                <li>Profile information</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>

              <h3 className="text-white text-lg font-semibold mt-4 mb-2">Usage Data</h3>
              <p>We automatically collect certain information when you use the Service:</p>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and preferences</li>
                <li>Log data (access times, pages viewed, actions taken)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-white text-lg font-semibold mt-4 mb-2">Workflow Data</h3>
              <p>We collect information about the workflows you create, including:</p>
              <ul>
                <li>Node configurations and connections</li>
                <li>Workflow metadata (names, descriptions, timestamps)</li>
                <li>API configurations and settings</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain the Service</li>
                <li>Improve and personalize your experience</li>
                <li>Develop new features and functionality</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve the Service</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            <Section title="4. How We Share Your Information">
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party
                  service providers who perform services on our behalf
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger, sale of company
                  assets, or acquisition
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with your consent
                  or at your direction
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </Section>

            <Section title="5. Data Security">
              <p>
                We implement appropriate technical and organizational measures to protect your
                information against unauthorized access, alteration, disclosure, or destruction.
                These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage practices</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100%
                secure. While we strive to protect your information, we cannot guarantee its absolute
                security.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain your information for as long as necessary to provide the Service and fulfill
                the purposes outlined in this Privacy Policy. We may also retain information to comply
                with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </Section>

            <Section title="7. Your Rights and Choices">
              <p>Depending on your location, you may have certain rights regarding your information:</p>
              <ul>
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your information
                </li>
                <li>
                  <strong>Export:</strong> Request a copy of your data in a portable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Opt-out of marketing communications
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </Section>

            <Section title="8. Cookies and Tracking Technologies">
              <p>
                We use cookies and similar tracking technologies to collect and track information
                about your use of the Service. You can control cookies through your browser settings.
                However, disabling cookies may limit your ability to use certain features.
              </p>
            </Section>

            <Section title="9. Third-Party Services">
              <p>
                The Service may contain links to third-party websites or integrate with third-party
                services. We are not responsible for the privacy practices of these third parties.
                We encourage you to review their privacy policies.
              </p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                The Service is not intended for children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you believe we have collected
                information from a child under 13, please contact us immediately.
              </p>
            </Section>

            <Section title="11. International Data Transfers">
              <p>
                Your information may be transferred to and processed in countries other than your own.
                These countries may have different data protection laws. By using the Service, you
                consent to such transfers.
              </p>
            </Section>

            <Section title="12. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
                We encourage you to review this Privacy Policy periodically.
              </p>
            </Section>

            <Section title="13. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-purple-400">privacy@aiflowbuilder.com</p>
            </Section>
          </div>

          <div className="mt-8 pt-8 border-t border-[#333] text-center">
            <button
              onClick={() => navigate('/terms')}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              View Terms of Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-300 space-y-4">
        {children}
      </div>
    </div>
  );
}
