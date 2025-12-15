'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/app/providers';

export default function Contact() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        <div className="flex-1 w-full flex items-center justify-center p-12">
          <div className="max-w-md w-full">
            <h1 className="text-4xl font-bold text-text-default mb-4">Contact Me</h1>
            <p className="text-text-muted mb-8">Get in touch with me</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-bg-muted text-text-default placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-bg-primary"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-bg-muted text-text-default placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-bg-primary"
                required
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-bg-muted text-text-default placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-bg-primary"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-bg-primary text-text-inverse px-6 py-3 rounded-lg hover:opacity-90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>

            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                Thank you! I'll get back to you soon.
              </div>
            )}

            <Link href="/" className="inline-block text-bg-primary hover:underline">
              ← Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
