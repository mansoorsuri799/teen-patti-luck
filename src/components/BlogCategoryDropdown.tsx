'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/site';

const categories = [
  { name: 'Safety & Legal', href: ROUTES.blogSafety },
  { name: 'Account & Login', href: ROUTES.blogLogin },
  { name: 'Bonuses', href: ROUTES.blogBonuses },
  { name: 'Tips to Win', href: ROUTES.blogTips },
];

export default function BlogCategoryDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-accent font-medium"
        aria-expanded={open}
      >
        Categories ▾
      </button>
      {open && (
        <ul className="absolute z-20 mt-2 w-56 rounded-lg border border-gray-700 bg-primary shadow-xl py-2">
          {categories.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#0A1F2E] hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
