'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 border-b border-gray-200">
        <p className="text-sm font-medium text-orange-600 uppercase tracking-widest mb-3">Contact Us</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">We'd love to hear from you.</h1>
        <p className="mt-4 text-gray-500 text-lg max-w-xl">
          Have a question, need help with an order, or just want to say hi? Our team is here for you.
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-32 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    label: "Headquarters",
                    lines: ["4821 Commerce Drive, Suite 300", "Austin, TX 78701"],
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    lines: ["Customer Support: (512) 348-9021", "Order Inquiries: (512) 348-9055"],
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    lines: ["support@quickcart.com", "orders@quickcart.com"],
                  },
                  {
                    icon: "🕐",
                    label: "Business Hours",
                    lines: ["Mon – Fri: 8:00 AM – 8:00 PM CT", "Sat – Sun: 10:00 AM – 5:00 PM CT"],
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-medium text-gray-800 text-sm mb-1">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-gray-500 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional offices */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Regional Offices</h2>
              <div className="space-y-4 text-sm text-gray-500">
                <div>
                  <p className="font-medium text-gray-700">New York</p>
                  <p>1140 Avenue of the Americas, 9th Floor</p>
                  <p>New York, NY 10036</p>
                  <p className="text-orange-600 mt-0.5">(212) 765-4103</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Los Angeles</p>
                  <p>3550 Wilshire Blvd, Suite 820</p>
                  <p>Los Angeles, CA 90010</p>
                  <p className="text-orange-600 mt-0.5">(323) 891-5247</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Chicago</p>
                  <p>233 S Wacker Drive, Floor 45</p>
                  <p>Chicago, IL 60606</p>
                  <p className="text-orange-600 mt-0.5">(312) 540-8839</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-500 transition text-gray-700"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-500 transition text-gray-700"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Order issue, product question…"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-500 transition text-gray-700"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us how we can help…"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-orange-500 transition text-gray-700 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ strip */}
      <section className="px-6 md:px-16 lg:px-32 py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "How long does shipping take?", a: "Most orders ship within 24 hours and arrive in 2–5 business days via UPS or FedEx." },
              { q: "Can I change or cancel my order?", a: "Orders can be modified or cancelled within 1 hour of placement. Contact us immediately at (512) 348-9021." },
              { q: "Are all products genuine?", a: "Yes — we source directly from authorized distributors. Every item carries the full manufacturer warranty." },
              { q: "What is your return policy?", a: "We offer a 30-day no-questions-asked return policy on all items in original condition." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-medium text-gray-800 text-sm mb-2">{faq.q}</p>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
