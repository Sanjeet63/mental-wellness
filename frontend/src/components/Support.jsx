import React, { useState } from "react";
import { Send, MessageCircle, Instagram, Hash } from "lucide-react";

const Support = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to backend
    alert("Support request submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Get Support
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Connect with Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://t.me/CAMPUS_CARE_SUPPORT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                <MessageCircle className="mr-3" size={20} />
                Join our Telegram
              </a>
              <a
                href="https://instagram.com/yourinstagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
              >
                <Instagram className="mr-3" size={20} />
                Follow on Instagram
              </a>
              <a
                href="https://discord.gg/c4eXp2DQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                <Hash className="mr-3" size={20} />
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;