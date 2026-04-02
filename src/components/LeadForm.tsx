import React, { useState } from 'react';

const LeadForm: React.FC<{ title?: string }> = ({ title = "Request a Free Quote" }) => {
  const [form, setForm] = useState({ fullName: '', phone: '', streetAddress: '', city: '', projectDescription: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://app.lowkly.com/api/webhooks/leads/9ba922e2211a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.fullName,
          phone: form.phone,
          street_address: form.streetAddress,
          city: form.city,
          project_description: form.projectDescription,
          source: window.location.href,
        }),
      });
    } catch (err) {}
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 p-4 sm:p-8 rounded-[32px] border border-gray-100 shadow-xl text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p className="text-gray-600">We'll be in touch shortly to discuss your project.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 sm:p-8 rounded-[32px] border border-gray-100 shadow-xl">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input type="text" name="fullName" required value={form.fullName} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="John Smith" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="(555) 555-5555" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
          <input type="text" name="streetAddress" required value={form.streetAddress} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="123 Main St" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
          <input type="text" name="city" required value={form.city} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="City" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
          <textarea name="projectDescription" required value={form.projectDescription} onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Describe your concrete project..." />
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50">
          {loading ? 'Submitting...' : 'Get My Free Quote'}
        </button>
      </form>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-black mb-2">Mooresville, NC Local Support:</p>
        <p className="text-2xl font-bold">(984) 253-1031</p>
      </div>
    </div>
  );
};

export default LeadForm;
