'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Define navigation links to avoid repetition
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/informasi-bencana', label: 'Informasi Bencana' },
  { href: '/berita', label: 'Berita' },
  { href: '/edukasi', label: 'Edukasi' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#010066] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and BPBD Name */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/logo-bpbd.png"
              alt="BPBD Barito Utara"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <div>
            <h1 className="text-lg font-bold">BPBD Barito Utara</h1>
            <p className="text-sm">Sigap dan Tanggap Bencana</p>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 border-b-2 border-transparent hover:border-[#fe0000]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Emergency Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/hubungi-bpbd"
            className="bg-orange-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-[#ea5922]"
          >
            Hubungi BPBD
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fe0000] p-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/hubungi-bpbd"
            className="block bg-[#ea5922] text-white text-center p-2 rounded-lg hover:bg-orange-600"
          >
            Hubungi BPBD
          </Link>
        </div>
      )}
    </header>
  );
}