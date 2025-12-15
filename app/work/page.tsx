'use client';

import Link from 'next/link';
import { useTheme } from '@/app/providers';

export default function Work() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        <div className="flex-1 w-full flex items-center justify-center p-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-default mb-4">Work</h1>
            <p className="text-text-muted mb-8">Explore my portfolio of projects</p>
            <Link href="/" className="inline-block bg-bg-primary text-text-inverse px-6 py-3 rounded-lg hover:opacity-90 transition-colors">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
