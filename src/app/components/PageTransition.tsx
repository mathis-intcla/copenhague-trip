'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayed, setDisplayed] = useState(children);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
    const timeout = setTimeout(() => {
      setDisplayed(children);
      setTransition(false);
    }, 350);
    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div
      className={`transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform ${
        transition ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
      }`}
    >
      {displayed}
    </div>
  );
} 