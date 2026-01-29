// app/components/ThemeWrapper.tsx
"use client";

import { useEffect } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force background color on dark mode
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.style.backgroundColor = '#111827';
      document.body.style.backgroundColor = '#111827';
    } else {
      document.documentElement.style.backgroundColor = '#ffffff';
      document.body.style.backgroundColor = '#ffffff';
    }
  }, []);

  return <div className="min-h-screen bg-white dark:bg-gray-900">{children}</div>;
}