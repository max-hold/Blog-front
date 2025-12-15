'use client';

import Link from 'next/link';
import { useTheme } from '@/app/providers';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { isDarkMode, toggleTheme } = useTheme();

  const blogContent: { [key: string]: { title: string; content: string } } = {
    '1': { title: 'Photography Tips', content: 'Learn the best photography tips...' },
    '2': { title: 'Lighting Guide', content: 'Master lighting in photography...' },
    '3': { title: 'Composition Basics', content: 'Understand composition principles...' },
  };

  const post = blogContent[params.slug] || { title: 'Not Found', content: 'Post not found' };

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        <div className="flex-1 w-full p-12">
          <h1 className="text-4xl font-bold text-text-default mb-4">{post.title}</h1>
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-text-muted">{post.content}</p>
          </div>

          <Link href="/blog" className="inline-block bg-bg-primary text-text-inverse px-6 py-3 rounded-lg hover:opacity-90 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
