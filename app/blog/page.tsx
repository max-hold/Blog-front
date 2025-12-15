'use client';

import Link from 'next/link';
import { useTheme } from '@/app/providers';

const blogPosts = [
  { id: 1, title: 'Photography Tips', slug: '1', excerpt: 'Learn the best photography tips' },
  { id: 2, title: 'Lighting Guide', slug: '2', excerpt: 'Master lighting in photography' },
  { id: 3, title: 'Composition Basics', slug: '3', excerpt: 'Understand composition principles' },
];

export default function Blog() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        <div className="flex-1 w-full p-12">
          <h1 className="text-4xl font-bold text-text-default mb-4">Blog</h1>
          <p className="text-text-muted mb-12">Read my latest articles</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-bg-muted rounded-[12px] p-8 hover:bg-bg-muted-2 transition-colors"
              >
                <h2 className="text-2xl font-bold text-text-default mb-2">{post.title}</h2>
                <p className="text-text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>

          <Link href="/" className="inline-block bg-bg-primary text-text-inverse px-6 py-3 rounded-lg hover:opacity-90 transition-colors">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
