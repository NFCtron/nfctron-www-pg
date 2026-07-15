'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-900 text-white shadow-lg shadow-primary-900/15">
      <nav className="container-fluid flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="NFCtron domů">
          <Image src="/nfctron-logo-white.svg" alt="NFCtron" width={106} height={20} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/for-organizers" className="text-white/70 hover:text-white transition">
            Pořadatelé
          </Link>
          <Link href="/for-retailers" className="text-white/70 hover:text-white transition">
            Prodejci
          </Link>
          <Link href="/case-studies" className="text-white/70 hover:text-white transition">
            Reference
          </Link>
          <Link href="/partners" className="text-white/70 hover:text-white transition">
            Partneři
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost text-white/80 hover:text-white hover:bg-white/10">Přihlášení</button>
          <button className="btn bg-white text-primary-900 hover:bg-primary-100 shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 12h8M12 8l4 4-4 4"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>
            Poptat řešení
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary-900 text-white">
          <div className="container-fluid py-4 flex flex-col gap-4">
            <Link href="/for-organizers" className="text-white/75 hover:text-white">
              Pořadatelé
            </Link>
            <Link href="/for-retailers" className="text-white/75 hover:text-white">
              Prodejci
            </Link>
            <Link href="/case-studies" className="text-white/75 hover:text-white">
              Reference
            </Link>
            <Link href="/partners" className="text-white/75 hover:text-white">
              Partneři
            </Link>
            <hr className="my-2" />
            <button className="w-full btn border border-white/20 text-white">Přihlášení</button>
            <button className="w-full btn bg-white text-primary-900">Poptat řešení</button>
          </div>
        </div>
      )}
    </header>
  );
}
