import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-black">Privacy Policy</h1>
        
        <div className="prose prose-lg prose-slate max-w-none space-y-8 text-black">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p>
              Mooresville Concrete ("we," "us," or "our") respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website matthewsconcretecontractor.com and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our lead forms, contact forms, and phone communications. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number, address).</li>
              <li>Project details and location information.</li>
              <li>Information about your property or business related to our concrete services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Use of Your Information</h2>
            <p>
              By submitting your information, you grant Mooresville Concrete an irrevocable, perpetual, worldwide right to use your data for our business operations. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing, maintaining, and improving our services.</li>
              <li>Marketing and promotional purposes across all media channels.</li>
              <li>Sharing with affiliated partners and third-party service providers at our sole discretion.</li>
              <li>Responding to inquiries and fulfilling quote requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p>
              While we implement industry-standard security measures, no method of transmission over the Internet is 100% secure. Mooresville Concrete shall not be held liable for any unauthorized access or data breaches beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites or forms (e.g., LeadConnector). We are not responsible for the privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Consent</h2>
            <p>
              By using this site, you consent to our collection and use of your information as described in this policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

