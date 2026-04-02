import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-black">Terms and Conditions</h1>
        
        <div className="prose prose-lg prose-slate max-w-none space-y-8 text-black">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using matthewsconcretecontractor.com (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree, you must immediately cease all use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Intellectual Property Rights</h2>
            <p>
              The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Mooresville Concrete and are protected by United States and international copyright, trademark, and other intellectual property or proprietary rights laws.
            </p>
            <p className="font-bold text-black">
              THE SITE IS PROPRIETARY. ANY UNAUTHORIZED COPYING, REPRODUCTION, OR REDISTRIBUTION OF THE SITE OR ITS CONTENT IS STRICTLY PROHIBITED.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Prohibited Misuse and Penalties</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, modify, or create derivative works of any part of the Site.</li>
              <li>Scrape, crawl, or use any automated means to extract data from the Site.</li>
              <li>Attempt to reverse engineer or decompile any software or code contained on the Site.</li>
              <li>Steal or misappropriate any intellectual property, designs, or proprietary information.</li>
            </ul>
            <p className="bg-black text-white p-6 rounded-2xl font-bold border-l-4 border-red-500">
              LIQUIDATED DAMAGES: Any violation of this Section 3 or theft of proprietary content will result in immediate legal action and a minimum liquidated damages fine of $100,000 USD per occurrence, plus all legal fees and costs incurred by Mooresville Concrete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. User Submissions and Data Usage</h2>
            <p>
              By submitting any information (including but not limited to lead forms, photos, or reviews) to us, you grant Mooresville Concrete an absolute, unrestricted, and perpetual right to use, sell, distribute, or modify that information for any purpose whatsoever, including commercial marketing and business operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Disclaimer of Warranties</h2>
            <p>
              The Site is provided on an "as-is" and "as-available" basis without any warranties of any kind. Mooresville Concrete does not warrant that the Site will be error-free or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Limitation of Liability and Covenant Not to Sue</h2>
            <p>
              In no event shall Mooresville Concrete, its owners, or affiliates be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Site.
            </p>
            <p className="bg-red-50 p-6 rounded-2xl font-bold text-red-900 border-2 border-red-200">
              COVENANT NOT TO SUE: BY ACCESSING AND USING THIS SITE, YOU EXPRESSLY AND IRREVOCABLY AGREE TO WAIVE YOUR RIGHT TO FILE ANY LAWSUIT, CLAIM, OR LEGAL PROCEEDING AGAINST MATTHEWS CONCRETE, ITS OWNERS, EMPLOYEES, OR AFFILIATES. YOU AGREE THAT THIS SITE IS PROVIDED "AS IS" AND YOUR USE OF THE SITE IS AT YOUR SOLE RISK. YOU FOREVER RELEASE AND DISCHARGE MATTHEWS CONCRETE FROM ANY AND ALL LIABILITY, CLAIMS, DEMANDS, OR CAUSES OF ACTION WHATSOEVER ARISING OUT OF YOUR USE OF THE SITE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Mandatory Arbitration and Class Action Waiver</h2>
            <p>
              In the event that the Covenant Not to Sue in Section 6 is found to be unenforceable by a court of competent jurisdiction, you agree that any and all disputes arising out of or related to this Site shall be resolved exclusively through final and binding arbitration in Wayne County, NC, rather than in court. YOU EXPRESSLY WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of North Carolina. You irrevocably submit to the exclusive jurisdiction of the courts in Wayne County, NC.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

