import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/app/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hanssen Portfolio',
  description: 'Portfolio showcasing creative work and services',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full min-h-screen bg-bg-default text-text-default font-sans antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
